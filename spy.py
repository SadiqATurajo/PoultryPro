from flask import Flask, render_template

app = Flask(__name__)
print(__name__)

@app.route('/')
def hello_world():
    return render_template('hompage.html')
@app.route('/homes')
def hello_world_save():
    return 'Hello, World! I am an Engineer'
@app.route('/ata')
def hello_world_biodata():
    paragraphs = [
        'Name: Sadiq Abubakar Turajo',
        'Email: turajoasadiq@gmail.com',
        'Phone: 08012345678',
        'Address: Nasarawa, Kano Nigeria',
        'Occupation: Electrical Engineering Student',
        'Hobbies: Reading, Writing, and Learning',
        'Skills: Python, HTML, CSS, JavaScript, and Electrician',
        'Languages: English, Hausa, and Arabic',
        'Nationality: Nigerian',
        'State: Kano',
        'Local Government: Garko',
        'Date of Birth: 1st January 1999',

    ]
    biodata = "<br>".join(paragraphs)
    return f'Hello, World biodata!<br><br>{biodata}'

if __name__ == '__main__':
    app.run(debug=True)