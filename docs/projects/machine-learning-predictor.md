---
title: "Customer Churn Prediction Model"
description: "Machine learning model to predict customer churn using advanced algorithms and feature engineering techniques"
technologies: ["Python", "Scikit-learn", "XGBoost", "Docker", "FastAPI"]
status: "Completed"
github_url: "https://github.com/jumashafara/churn-prediction"
demo_url: "https://churn-predictor-api.herokuapp.com"
featured: true
date: "2024-11-20"
---

# Customer Churn Prediction Model

An end-to-end machine learning solution for predicting customer churn, featuring advanced feature engineering, model optimization, and API deployment.

## Problem Statement

Customer churn is a critical business metric that directly impacts revenue. This project develops a predictive model to identify customers at risk of churning, enabling proactive retention strategies.

## Solution Approach

### Data Processing
- Comprehensive exploratory data analysis
- Feature engineering and selection
- Data preprocessing and normalization
- Handling imbalanced datasets

### Model Development
- Multiple algorithm comparison (Random Forest, XGBoost, Logistic Regression)
- Hyperparameter tuning using GridSearchCV
- Cross-validation and performance evaluation
- Model interpretability analysis

### Deployment
- RESTful API using FastAPI
- Containerization with Docker
- Cloud deployment on Heroku
- Automated testing and CI/CD

## Results

- **Accuracy**: 89.5% on test dataset
- **Precision**: 87.2% for churn prediction
- **Recall**: 84.8% for identifying at-risk customers
- **Business Impact**: Potential 15% reduction in churn rate

## Technologies

- **ML Libraries**: Scikit-learn, XGBoost, Pandas, NumPy
- **API Framework**: FastAPI, Uvicorn
- **Deployment**: Docker, Heroku, GitHub Actions
- **Visualization**: Matplotlib, Seaborn, SHAP