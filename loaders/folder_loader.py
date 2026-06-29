# 6 project scan
import os
from langchain_core.documents import Document


SUPPORTED_FILES=[
    ".py",
    ".html",
    ".css",
    ".js",
    ".md",
    ".json",
    ".txt",
    ".ipynb"
]


def load_folder(folder_path):

    documents = []

    for root, dirs, files in os.walk(folder_path):

        for file in files:

            extension = os.path.splitext(file)[1]

            if extension not in SUPPORTED_FILES:
                continue

            file_path = os.path.join(root, file)

            try:
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()

                documents.append(
                    Document(
                        page_content=content,
                        metadata={
                            "file_name": file,
                            "file_type": extension,
                            "path": file_path
                        }
                    )
                )

            except Exception:
                pass

    return documents


