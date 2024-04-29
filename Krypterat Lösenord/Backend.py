from flask import Flask, redirect, url_for, render_template, request, flash



def encryptDecrypt(inpString): 
	# Define XOR key 
	xorKey = 'supercoolxorencryptionkey'; 

	# calculate length of input string 
	length = len(inpString); 

	# perform XOR operation of key 
	# with every character in string 
	for i in range(length): 
	
		inpString = (inpString[:i] +
			chr(ord(inpString[i]) ^ ord(xorKey[i])) +
					inpString[i + 1:]); 
		#print(inpString[i], end = ""); 
	
	return inpString; 


app = Flask(__name__)
app.secret_key = "1234"

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/login", methods=["POST", "GET"])
def login():
    if request.method == "POST":

        # on login 
        if "login" in request.form.keys():
            if request.form["loginName"] == '' or request.form["loginPass"] == '':
                flash("loginFalied", "info")
            else:
                try:
                    f = open("public/"+ request.form["loginName"], "r")
                    password = f.read()
                    f.close
                    if encryptDecrypt(password) == request.form["loginPass"]:
                        # open user page
                        user = request.form["loginName"]
                        return redirect(url_for("user", usr=user))
                    else:
                        flash("loginFalied", "info")

                except FileNotFoundError:
                    flash("loginFalied", "info")

        # on signUp:
        elif "signUp" in request.form.keys():

            if request.form["signUpName"] == '' or request.form["signUpPass"] == '':
                flash("signUpFalied", "info")
            else:
                try:
                    f = open("public/"+ request.form["signUpName"], "x")
                    f.write(encryptDecrypt(request.form["signUpPass"]))
                    f.close
                    # open user page

                except FileExistsError:
                    flash("signUpFalied", "info")

        else:
            print("falure")

        return render_template("Login.html")
    else:
        return render_template("Login.html")

@app.route("/<usr>")
def user(usr):
    return f"<h1>Sorry {usr} This Page is only Available on the full Release</h1> <div>Buy the Premium Version of the Website <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>HERE</a>"


if __name__ == "__main__":
    app.run()
