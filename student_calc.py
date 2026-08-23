# ==============================
# STUDENT GRADE CALCULATOR SYSTEM
# ==============================

class Student:
    def __init__(self, name):
        self.name = name
        self.subjects = {}
    
    def add_subject(self, subject, marks):
        self.subjects[subject] = marks

    def calculate_average(self):
        if not self.subjects:
            return 0
        return sum(self.subjects.values()) / len(self.subjects)

    def calculate_grade(self):
        avg = self.calculate_average()
        if avg >= 90:
            return "A"
        elif avg >= 75:
            return "B"
        elif avg >= 60:
            return "C"
        elif avg >= 50:
            return "D"
        else:
            return "F"

    def display_report(self):
        print("\n--- Student Report ---")
        print(f"Name: {self.name}")
        print("Subjects:")
        for sub, marks in self.subjects.items():
            print(f"  {sub}: {marks}")
        print(f"Average: {self.calculate_average():.2f}")
        print(f"Grade: {self.calculate_grade()}")
        print("----------------------\n")


class GradeSystem:
    def __init__(self):
        self.students = {}

    def add_student(self):
        name = input("Enter student name: ")
        if name in self.students:
            print("Student already exists!\n")
            return
        
        student = Student(name)

        n = int(input("Enter number of subjects: "))
        for _ in range(n):
            subject = input("Enter subject name: ")
            marks = float(input(f"Enter marks for {subject}: "))
            student.add_subject(subject, marks)

        self.students[name] = student
        print("Student added successfully!\n")

    def view_student(self):
        name = input("Enter student name: ")
        if name in self.students:
            self.students[name].display_report()
        else:
            print("Student not found!\n")

    def view_all_students(self):
        if not self.students:
            print("No records found!\n")
            return

        for student in self.students.values():
            student.display_report()

    def menu(self):
        while True:
            print("====== STUDENT GRADE SYSTEM ======")
            print("1. Add Student")
            print("2. View Student")
            print("3. View All Students")
            print("4. Exit")

            choice = input("Enter choice: ")

            if choice == '1':
                self.add_student()
            elif choice == '2':
                self.view_student()
            elif choice == '3':
                self.view_all_students()
            elif choice == '4':
                print("Exiting...")
                break
            else:
                print("Invalid choice!\n")


# Run Program
if __name__ == "__main__":
    system = GradeSystem()
    system.menu()