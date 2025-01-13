from flask import Flask, jsonify, request
from flask_cors import CORS
import re

app = Flask(__name__)
CORS(app)


def is_valid_email(email):
    if re.search(r'\d', email):
        return True
    elif re.search(r'@', email):
        return True
    else:
        return False

def process_data(data):
    global g_data
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    g_data = data

    print(f"Name: {name}")
    print(f"Email: {email}")
    print(f"Message: {message}")

    return jsonify({"message": "Data received successfully."})


@app.route('/api/data', methods=['POST'])
def receive_data():
    data = request.json
    return process_data(data)

@app.route('/send', methods=['GET'])
def send():
    if not is_valid_email(g_data.get('email')):
        return jsonify({"error": "Invalid email or phone number."})

    return jsonify({"message": "Your message has been sent successfully."})

if __name__ == '__main__':
    app.run(debug=True)
