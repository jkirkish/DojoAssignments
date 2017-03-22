from flask import Flask, render_template,request,redirect
app=Flask(__name__)

@app.route('/')
def dojoSurvery():
    return render_template("DojoSurvey.html")

@app.route('profile.html', methods=['POST'])
def create_user():
    print "Got Post Info"
    name = request.form['name']
    location = request.form['location']
    language = request.form['language']
    comment = request.form['comment']
    return render_template('profile.html', name=name, location=location, language=language,comment=comment)

app.run(debug=True)
