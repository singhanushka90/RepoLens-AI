import tempfile
from langchain_community.document_loaders import GitLoader

def load_github_repo(github_url):
    temp_dir=tempfile.mkdtemp()
    loader=GitLoader(
        clone_url=github_url,
        repo_path=temp_dir,
        branch="main"
    )
    loader.load()
    return temp_dir