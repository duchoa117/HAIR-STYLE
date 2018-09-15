from flask import *
import mlab
from youtube_dl import YoutubeDL 
from models.users_feedback import Feedback

app = Flask(__name__)
mlab.connect()

@app.route('/')
def index():
    return render_template('index.html')
@app.route('/findyourface', methods = ["GET","POST"])
def find_your_face():
    if request.method == 'GET':
        return render_template("calculation.html")
    elif request.method == "POST":
        form = request.form
        face_height = int(form['Chieu_dai_khuon_mat'])
        forehead_width = int(form['Do_rong_tran'])
        cheek = int(form['Do_rong_giua_2_ben_go_ma'])
        jawbone = int(form['Do_rong_xuong_ham'])
        def almost(a,b):
            if abs(a-b)<=3:
                return True
            else:
                return False
        face_cheek = almost(face_height,cheek)
        forehead_cheek = almost(forehead_width,cheek)
        forehead_jawbone = almost(forehead_width,jawbone)
        cheek_jawbone = almost(cheek,jawbone)
        if face_height>cheek>forehead_width>jawbone:
            face = "Diamondface"
        elif forehead_width>cheek>jawbone:
            face = "Heartface"
        elif face_height>max(forehead_width,cheek,jawbone)and forehead_cheek and forehead_jawbone and cheek_jawbone:
            face ="Longface"
        elif face_height>cheek and forehead_width>jawbone:
            face = "Ovalface"
        elif min(face_height,cheek)>max(forehead_width,jawbone) and face_cheek  and forehead_jawbone:
            face = "Roundface"
        elif face_cheek  and forehead_cheek and forehead_jawbone and cheek_jawbone:
            face = "Squareface"
        elif jawbone>cheek>forehead_width:
            face ="Triangleface"
        else:
            face = 'x-men'
        return redirect(url_for("face", face = face))


@app.route('/face_detail/<face>')
def face(face):
    if face == 'Diamondface':
        return render_template('diamond.html')
    elif face == 'Squareface':
        return render_template('square.html')
    elif face == 'Heartface':
        return render_template('heart.html')
    elif face == 'Longface':
        return render_template('oblong.html')
    elif face == 'Roundface':
        return render_template('round.html')
    elif face == 'Ovalface':
        return render_template('oval.html')
    elif face == 'Triangleface':
        return render_template('triangle.html')
    else:
        return "x-men"
    
@app.route("/detail")
def detail():
    return render_template("detail.html")
@app.route("/feedback", methods = ["GET", "POST"])
def feedback():
    if request.method == 'GET':
        return render_template("feedback.html")
    elif request.method == "POST":
        form = request.form
        name = form['name']
        stt = form['stt']
        
        content = form['content']
        mlab.connect()
        feedback = Feedback(name = name, stt = stt, content = content, post = False)
        feedback.save()
        return redirect(url_for("comment"))
@app.route("/comment", methods = ["GET","POST"])
def comment():
    mlab.connect()
    feedback_list = Feedback.objects()
    if request.method == 'GET':
        return render_template("comment.html", feedback_list = feedback_list)
@app.route('/quiz')
def quiz():
    return render_template("quiz.html")
if __name__ == '__main__':
  app.run(debug=True)