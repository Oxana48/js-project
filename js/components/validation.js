import { showError } from "./error.js";

export function validation() {
  const validate = new JustValidate(".questions__form");
  validate
    .addField("#name", [
      {
        rule: "required",
        errorMessage: "Пожалуйста, введите ваше имя",
      },
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Имя должно содержать минимум 3 символа",
      },
      {
        rule: "maxLength",
        value: 20,
        errorMessage: "Имя не должно превышать 20 символов",
      },
    ])
    .addField("#email", [
      {
        rule: "required",
        errorMessage: "Пожалуйста, введите ваш email",
      },
      {
        rule: "email",
        errorMessage: "Введите корректный email адрес",
      },
    ])
    .addField("#agree", [
      {
        rule: "required",
        errorMessage: "Необходимо ваше согласие",
      },
    ])
    .onSuccess(async (event) => {
      event.preventDefault();
      const form = event.target;

      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const checkbox = document.querySelector("#agree").checked;
      const formData = {
        name,
        email,
        checkbox,
      };

      try {
        const response = await fetch("https://httpbin.org/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          showError("Благодарим за обращение!");
          form.reset();
        } else {
          throw new Error("Не удалось отправить сообщение!");
        }
      } catch (error) {
        showError("Не удалось отправить обращение");
      }
    });
}
