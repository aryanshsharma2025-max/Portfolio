# ============================
# BASIC AI CHATBOT (BEGINNER)
# ============================

def chatbot():
    print("🤖 Chatbot: Hello! I am your basic AI chatbot.")
    print("Type 'exit' to end the chat.\n")

    while True:
        user_input = input("You: ").lower()

        # Exit condition
        if user_input == "exit":
            print("🤖 Chatbot: Goodbye! Have a nice day 😊")
            break

        # Greeting
        elif "hello" in user_input or "hi" in user_input:
            print("🤖 Chatbot: Hello! How can I help you?")

        # Asking name
        elif "your name" in user_input:
            print("🤖 Chatbot: I am a basic chatbot created using Python.")

        # Asking about skills
        elif "what can you do" in user_input or "skills" in user_input:
            print("🤖 Chatbot: I can answer simple questions based on keywords.")

        # Asking about programming
        elif "python" in user_input:
            print("🤖 Chatbot: Python is a powerful and easy programming language.")

        # Asking about CSE
        elif "cse" in user_input:
            print("🤖 Chatbot: CSE stands for Computer Science and Engineering.")

        # Default response
        else:
            print("🤖 Chatbot: Sorry, I don't understand that.")

# Run chatbot
chatbot()