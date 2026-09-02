                         USER
                          │
                          │ Transaction
                          ▼
                ┌──────────────────┐
                │   API Gateway    │
                └────────┬─────────┘
                         │
                         ▼
                ┌──────────────────┐
                │ Transaction API  │
                │    FastAPI       │
                └────────┬─────────┘
                         │
                         ▼
                ┌──────────────────┐
                │      Kafka       │
                │ Event Streaming  │
                └────────┬─────────┘
                         │
                         ▼
             ┌────────────────────────┐
             │ Feature Engineering    │
             │       Service          │
             └───────────┬────────────┘
                         │
              ┌──────────┴──────────┐
              │                     │
              ▼                     ▼
       ┌──────────────┐      ┌──────────────┐
       │    Redis     │      │ Historical DB│
       │ Online Data  │      │ PostgreSQL   │
       └──────┬───────┘      └──────────────┘
              │
              ▼
       ┌──────────────────┐
       │   Fraud ML Model │
       │  XGBoost/LightGBM│
       └────────┬─────────┘
                │
                ▼
       Fraud Probability
                │
                ▼
       ┌──────────────────┐
       │  Decision Engine │
       └────────┬─────────┘
                │
       ┌────────┼─────────┐
       ▼        ▼         ▼
    APPROVE   REVIEW     BLOCK
