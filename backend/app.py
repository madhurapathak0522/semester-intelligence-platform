from flask import Flask

app = Flask(__name__)

# Home Page
@app.route("/")
def home():
    return """
    <!DOCTYPE html>
    <html>
    <head>
        <title>SIP</title>

        <style>
            body {
                font-family: Arial, sans-serif;
                background: #f5f7fb;
                text-align: center;
                padding-top: 100px;
            }

            h1 {
                color: #2c3e50;
            }

            select {
                padding: 12px;
                font-size: 18px;
                border-radius: 8px;
                margin-top: 20px;
            }

            button {
                margin-top: 20px;
                padding: 12px 24px;
                background: #3498db;
                color: white;
                border: none;
                border-radius: 8px;
                font-size: 18px;
                cursor: pointer;
            }

            button:hover {
                opacity: 0.9;
            }
        </style>
    </head>

    <body>

        <h1>Semester Intelligence Platform 🚀</h1>

        <p>Select your semester</p>

        <form action="/dashboard">

            <select name="semester">

                <option>Semester 1</option>
                <option>Semester 2</option>
                <option>Semester 3</option>
                <option>Semester 4</option>
                <option>Semester 5</option>
                <option>Semester 6</option>
                <option>Semester 7</option>
                <option>Semester 8</option>

            </select>

            <br>

            <button type="submit">
                Continue
            </button>

        </form>

    </body>
    </html>
    """


# Dashboard Page
@app.route("/dashboard")
def dashboard():
    return """
    <!DOCTYPE html>
    <html>
    <head>

        <title>Dashboard</title>

        <style>
            body {
                font-family: Arial, sans-serif;
                background: #f5f7fb;
                padding: 40px;
            }

            h1 {
                text-align: center;
            }

            .card {
                background: white;
                padding: 20px;
                margin: 20px auto;
                width: 300px;
                border-radius: 12px;
                box-shadow: 0px 2px 10px rgba(0,0,0,0.1);
                text-align: center;
            }

            .progress {
                color: #3498db;
                font-weight: bold;
            }
        </style>

    </head>

    <body>

        <h1>Semester Dashboard</h1>

        <div class="card">
            <h2>Signals & Systems</h2>
            <p class="progress">Progress: 40%</p>
        </div>

        <div class="card">
            <h2>Communication Systems</h2>
            <p class="progress">Progress: 65%</p>
        </div>

        <div class="card">
            <h2>Digital Electronics</h2>
            <p class="progress">Progress: 20%</p>
        </div>

    </body>
    </html>
    """


if __name__ == "__main__":
    app.run(debug=False)