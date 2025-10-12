# from flask import Flask, request, render_template
# import joblib
# import numpy as np

# app = Flask(__name__)

# # ✅ Load model
# model_data = joblib.load("heart_model.pkl")
# model = model_data["pipeline"]
# features = model_data["feature_names"]

# @app.route('/')
# def home():
#     return render_template('index.html', features=features)

# @app.route('/predict', methods=['POST'])
# def predict():
#     try:
#         # collect user inputs
#         input_data = [float(request.form.get(f, 0)) for f in features]
#         input_array = np.array(input_data).reshape(1, -1)
#         prediction = model.predict(input_array)[0]
#         result = "Heart Disease Detected 😟" if prediction == 1 else "No Heart Disease 😊"
#         return render_template('index.html', features=features, prediction=result)
#     except Exception as e:
#         return render_template('index.html', features=features, prediction=f"Error: {e}")

# if __name__ == "__main__":
#     app.run(debug=True)



from flask import Flask, render_template, request
import pandas as pd
import pickle  # or your ML model

app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))

@app.route('/predict', methods=['POST'])
def predict():
    # Get form values in the correct order
    features = ['age','sex','cp','trtbps','chol','fbs','restecg','thalachh','exng','oldpeak','slp','caa','thall']
    
    # Collect values as list
    input_vals = []
    for feature in features:
        value = request.form[feature]
        # Convert numeric strings to float/int as needed
        if feature in ['age','trtbps','chol','thalachh','oldpeak','caa']:
            input_vals.append(float(value))
        else:
            input_vals.append(int(value))  # for binary/categorical values

    # Convert to a DataFrame
    df = pd.DataFrame([input_vals], columns=features)

    # Predict
    prediction = model.predict(df)[0]

    if prediction == 0:
        result = "No Heart Disease"
    else:
        result = "Heart Disease Detected"

    return render_template('index.html', prediction=result)
