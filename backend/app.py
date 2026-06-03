from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return """
    <h1>Semester Intelligence Platform</h1>
    <p>Welcome to SIP 🚀</p>
    <p>Your academic planning assistant</p>
    """

if __name__ == "__main__":
    app.run(debug=False)