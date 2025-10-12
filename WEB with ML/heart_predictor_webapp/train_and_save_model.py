# train_and_save_model.py
"""
Train a simple model pipeline from 'heart (2).csv' and save it to 'heart_model.pkl'.
"""

import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.impute import SimpleImputer
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer

# === 1. Load your dataset ===
df = pd.read_csv("heart (2).csv")

print("✅ CSV loaded successfully!")
print("Columns:", list(df.columns))

# === 2. Choose the target column ===
# If your dataset already has a column named 'target' or similar, we’ll use it
possible_targets = ['target', 'Target', 'heart_disease', 'HeartDisease', 'output', 'Outcome']
target_col = None
for col in possible_targets:
    if col in df.columns:
        target_col = col
        break

# If not found, assume the last column is the target
if target_col is None:
    target_col = df.columns[-1]

print(f"🎯 Using target column: {target_col}")

X = df.drop(columns=[target_col])
y = df[target_col]

# === 3. Separate numeric and categorical features ===
numeric_cols = X.select_dtypes(include=['int64', 'float64']).columns
categorical_cols = [c for c in X.columns if c not in numeric_cols]

# === 4. Preprocessing ===
numeric_transformer = Pipeline(steps=[
    ("imputer", SimpleImputer(strategy="median")),
    ("scaler", StandardScaler())
])

categorical_transformer = Pipeline(steps=[
    ("imputer", SimpleImputer(strategy="most_frequent"))
])

preprocessor = ColumnTransformer(transformers=[
    ("num", numeric_transformer, numeric_cols),
    ("cat", categorical_transformer, categorical_cols)
])

# === 5. Model pipeline ===
model = Pipeline(steps=[
    ("preprocessor", preprocessor),
    ("classifier", RandomForestClassifier(n_estimators=100, random_state=42))
])

# === 6. Train the model ===
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model.fit(X_train, y_train)

train_score = model.score(X_train, y_train)
test_score = model.score(X_test, y_test)
print(f"✅ Model trained. Train accuracy: {train_score:.3f}, Test accuracy: {test_score:.3f}")

# === 7. Save the model ===
joblib.dump({
    "pipeline": model,
    "feature_names": list(X.columns),
    "target_name": target_col
}, "heart_model.pkl")

print("💾 Model saved as 'heart_model.pkl'")
