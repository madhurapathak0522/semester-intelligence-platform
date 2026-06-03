from flask import Flask

app = Flask(__name__)


# HOME PAGE
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


# DASHBOARD PAGE
@app.route("/dashboard")
def dashboard():
    return """
    <!DOCTYPE html>
    <html>
    <head>

        <style>
            body {
                font-family: Arial, sans-serif;
                background: #f5f7fb;
                text-align: center;
                padding: 40px;
            }

            .card {
                background: white;
                width: 320px;
                margin: 20px auto;
                padding: 20px;
                border-radius: 12px;
                box-shadow: 0px 2px 8px rgba(0,0,0,0.1);
            }

            a {
                text-decoration: none;
            }

            button {
                padding: 10px 20px;
                border: none;
                border-radius: 8px;
                background: #3498db;
                color: white;
                cursor: pointer;
            }
        </style>

    </head>

    <body>

        <h1>Semester Dashboard</h1>

        <div class="card">
            <h2>Communication Systems</h2>
            <p>Track your topic progress</p>

            <a href="/subject">
                <button>Open Subject</button>
            </a>
        </div>

    </body>
    </html>
    """


# SUBJECT TRACKER PAGE
@app.route("/subject")
def subject():
    return """
    <!DOCTYPE html>
    <html>
    <head>

        <style>
            body {
                font-family: Arial, sans-serif;
                background: #f5f7fb;
                padding: 40px;
            }

            .box {
                background: white;
                padding: 30px;
                border-radius: 12px;
                width: 400px;
                margin: auto;
            }

            h1 {
                text-align: center;
            }

            label {
                font-size: 20px;
                display: block;
                margin: 15px 0;
            }

            #progress {
                color: #3498db;
                font-size: 22px;
                font-weight: bold;
                margin-top: 20px;
            }
        </style>

    </head>

    <body>

        <div class="box">

            <h1>Communication Systems</h1>

            <label>
                <input type="checkbox" class="topic">
                Modulation
            </label>

            <label>
                <input type="checkbox" class="topic">
                ASK
            </label>

            <label>
                <input type="checkbox" class="topic">
                FSK
            </label>

            <label>
                <input type="checkbox" class="topic">
                PCM
            </label>

            <h3 id="progress">
                Progress: 0%
            </h3>

        </div>

        <script>

            const checkboxes =
                document.querySelectorAll(".topic");

            const progress =
                document.getElementById("progress");

            checkboxes.forEach(box => {

                box.addEventListener("change", () => {

                    let checked = 0;

                    checkboxes.forEach(item => {
                        if(item.checked){
                            checked++;
                        }
                    });

                    let percent =
                        (checked / checkboxes.length) * 100;

                    progress.innerText =
                        "Progress: " +
                        percent.toFixed(0) +
                        "%";
                });

            });

        </script>

    </body>
    </html>
    """


if __name__ == "__main__":
    app.run(debug=False)