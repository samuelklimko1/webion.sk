from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message

app = Flask(__name__)
CORS(app)   

app.config['MAIL_SERVER'] = 'smtp.gmail.com'  
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'samuelklimkoprogramovanie@gmail.com'  
app.config['MAIL_PASSWORD'] = 'cspd iyrb lyyh xssd'  
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail = Mail(app)

@app.route("/contact", methods=["POST"])
def contact():
    data = request.get_json()

    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    message_content = data.get('message')

    msg = Message("New Contact Form Submission",
                  sender="samuelklimkoprogramovanie@gmail.com", 
                  recipients=["webion.sk@gmail.com"])

    msg.body = f"""
    Name: {name}
    Email: {email}
    Phone: {phone}
    Message: {message_content}
    """
    mail.send(msg)

    return jsonify({"message": "Email sent successfully"}), 200

@app.route("/zaklad", methods=["POST"])
def zaklad():
    data = request.get_json()

    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    message_content = data.get('message')
    budget = data.get("budget")

    msg = Message("New Zaklad Form Submission",
                  sender="samuelklimkoprogramovanie@gmail.com", 
                  recipients=["webion.sk@gmail.com"])

    msg.body = f"""
    Name: {name}
    Email: {email}
    Phone: {phone}
    Message: {message_content}
    Budget: {budget}
    """
    mail.send(msg)

    return jsonify({"message": "Email sent successfully"}), 200
if __name__ == "__main__":
    app.run(debug=True)