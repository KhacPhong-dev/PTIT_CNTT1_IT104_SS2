function getStudentSummary(student) {
    const subjects = student.subjects;
    let totalScore = 0;
    let bestSubject = null;
    let worstSubject = null;

    subjects.forEach(subject => {
        totalScore += subject.score;
        if (!bestSubject || subject.score > bestSubject.score) {
            bestSubject = subject;
        }
        if (!worstSubject || subject.score < worstSubject.score) {
            worstSubject = subject;
        }
    });

    const averageScore = (totalScore / subjects.length).toFixed(2);
    let classification;

    if (averageScore >= 8.5) {
        classification = "Học sinh giỏi";
    } else if (averageScore >= 7) {
        classification = "Học sinh khá";
    } else if (averageScore >= 5) {
        classification = "Học sinh trung bình";
    } else {
        classification = "Học sinh yếu";
    }

    return {
        averageScore: parseFloat(averageScore),
        classification,
        bestSubject,
        worstSubject
    };
}
const student = {
    name: "Nguyễn Văn A",
    age: 16,
    subjects: [
        { name: "Toán", score: 9.0 },
        { name: "Văn", score: 7.5 },
        { name: "Lý", score: 8.0 },
        { name: "Hóa", score: 6.5 },
        { name: "Sinh", score: 5.0 }
    ]
};
const summary = getStudentSummary(student);
console.log(`Điểm trung bình: ${summary.averageScore}`);
console.log(`Xếp loại: ${summary.classification}`);
console.log(`Môn học tốt nhất: ${summary.bestSubject.name} (${summary.bestSubject.score})`);
console.log(`Môn học kém nhất: ${summary.worstSubject.name} (${summary.worstSubject.score})`);
