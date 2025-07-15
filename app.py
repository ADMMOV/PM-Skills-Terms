# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import requests # For making HTTP requests to the Google Gemini API
import os # For environment variables (though API key will be handled by Canvas for frontend)

app = Flask(__name__)
CORS(app) # Enable CORS for all routes, allowing your frontend to connect

# --- IMPORTANT: Google Gemini API Configuration ---
# The API key will be provided by the Canvas environment at runtime for the frontend's fetch call.
# If this Flask server were to directly call Gemini API, you would need your key here:
# GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY", "YOUR_ACTUAL_GEMINI_API_KEY_HERE")
# For this setup, the Flask server acts as a simple proxy/echo for the prompt,
# and the actual Gemini API call will happen directly from the frontend (script.js).
# This ensures the API key is handled securely by the Canvas environment.

# Define the Google Gemini API endpoint and model
GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"

print("-----------------------------------------------------")
print("Flask server configured as a proxy/echo for Google Gemini API.")
print("The actual Gemini API call will be made directly from the frontend (script.js).")
print("-----------------------------------------------------")

@app.route('/predict', methods=['POST'])
def predict():
    """
    API endpoint to receive a prompt from the frontend.
    This backend will *simulate* forwarding the request to Gemini API
    and return a placeholder response.
    The actual Gemini API call will be made directly from the frontend.
    """
    if not request.is_json:
        return jsonify({"error": "Request must be JSON"}), 400

    data = request.get_json()
    user_prompt = data.get('prompt', '')

    if not user_prompt:
        return jsonify({"error": "Prompt is required"}), 400

    print(f"Received prompt from frontend: '{user_prompt}'")

    # This part simulates the backend receiving the request and preparing a response.
    # The actual LLM interaction will be handled by the frontend.
    simulated_backend_response = (
        f"היי! קיבלתי את שאלתך בשרת: '{user_prompt}'.\n"
        "זוהי תגובה משרת הפלאסק המדמה את העברת הבקשה. "
        "התשובה האמיתית מהמודל תופיע ישירות מה-API ב-Frontend."
    )
    print(f"Simulated backend response sent to frontend: '{simulated_backend_response}'")
    return jsonify({"response": simulated_backend_response})

@app.route('/')
def home():
    """Simple home route to confirm server is running."""
    return "Flask server for LLM integration is running (backend simulation)!"

if __name__ == '__main__':
    # Run the Flask app
    app.run(debug=True) # debug=True enables auto-reloading and better error messages
