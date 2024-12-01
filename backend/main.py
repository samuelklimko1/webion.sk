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

    msg_to_owner = Message("Nová správa z kontaktu",
                           sender="samuelklimkoprogramovanie@gmail.com", 
                           recipients=["webion.sk@gmail.com"])
    msg_to_owner.body = f"""
    Meno: {name}
    Email: {email}
    Telefón: {phone}
    Správa:\n {message_content}
    """
    mail.send(msg_to_owner)

    msg_to_user = Message("Ďakujeme za Vašu správu",
                          sender="samuelklimkoprogramovanie@gmail.com", 
                          recipients=[email])
    msg_to_user.body = f"""
    Dobrý deň {name},

    Ďakujeme za Vašu správu. Dostali sme vašu správu: 

    "{message_content}"

    Čoskoro sa Vám ozveme.

    Ďakujeme,
    Webion.sk Tím
    """
    mail.send(msg_to_user)

    return jsonify({"message": "Emails sent successfully"}), 200

@app.route("/zaklad", methods=["POST"])
def zaklad():
    data = request.get_json()

    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    message_content = data.get('message')
    budget = data.get("budget")

    msg_to_owner = Message("Nová správa zo základu",
                           sender="samuelklimkoprogramovanie@gmail.com", 
                           recipients=["webion.sk@gmail.com"])
    msg_to_owner.body = f"""
    Meno: {name}
    Email: {email}
    Telefón: {phone}
    Budget: {budget}
    Správa:\n {message_content}
    """
    mail.send(msg_to_owner)

    msg_to_user = Message("Ďakujeme za Vašu správu",
                          sender="samuelklimkoprogramovanie@gmail.com", 
                          recipients=[email])
    msg_to_user.body = f"""
    Dobrý deň {name},

    Ďakujeme za Vašu správu. Dostali sme vašu správu: 
    
    "{message_content}"

    Čoskoro sa Vám ozveme.
    
    Ďakujeme,
    Webion.sk Tím
    """
    mail.send(msg_to_user)

    return jsonify({"message": "Emails sent successfully"}), 200

if __name__ == "__main__":
    app.run(debug=False)