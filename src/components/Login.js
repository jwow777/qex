import { withRouter } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Button, Typography, TextField } from "@material-ui/core";
import { useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";

function Login({ handleLogin, history }) {
  const [error, setError] = useState(false);
  const [counter, setCounter] = useState(0);

  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm();

  const onSubmit = (data) => {
    if (localStorage.data === JSON.stringify(data)) {
      localStorage.setItem("token", "2wqdkhgsdquwuhsjaids");
      handleLogin();
      history.push("/profile");
    } else {
      setError(true);
      setCounter(counter+1);
    }
  };

  return (
    <main className="login">
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="login__form">
        {error ? (
          <>
            <Typography variant="subtitle2" color="error">
              { counter >= 20 
                ? 'Слишком много попыток' 
                : 'Неверные данные или нет такого пользователя'
              }
            </Typography>
            <ReactSpeedometer
              segments={20}
              maxValue={20}
              value={counter}
              width={200}
              height={125}
              needleHeightRatio={0.8}
              startColor="#4caf50"
              endColor="#f44336"
              customSegmentStops={[0,5,10,15,20]}
            />
          </>
        ) : (
          ""
        )}
        <Controller
          name="username"
          control={control}
          defaultValue=""
          rules={{
            required: {
              value: true,
              message: "Обязательное поле"
            },
            minLength: {
              value: 2,
              message: "Меньше 2 символов"
            },
            maxLength: {
              value: 15,
              message: "Больше 15 символов"
            }
          }}
          render={({ field }) => {
            return (
              <TextField
                type="text"
                label="Логин"
                variant="outlined"
                required
                fullWidth
                margin="normal"
                {...field}
              />
            );
          }}
        />
        {errors.username && (
          <Typography variant="subtitle2" color="error" paragraph={true}>
            {errors.username.message}
          </Typography>
        )}
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: {
              value: true,
              message: "Обязательное поле"
            },
            minLength: {
              value: 2,
              message: "Меньше 2 символов"
            },
            maxLength: {
              value: 15,
              message: "Больше 15 символов"
            }
          }}
          render={({ field }) => {
            return (
              <TextField
                type="password"
                label="Пароль"
                variant="outlined"
                required
                fullWidth
                margin="normal"
                {...field}
              />
            );
          }}
        />
        {errors.password && (
          <Typography variant="subtitle2" color="error" paragraph={true}>
            {errors.password.message}
          </Typography>
        )}
        <Button
          type="submit"
          size="large"
          fullWidth
          variant="contained"
          color="primary"
          disabled={ counter >= 20 
            ? true 
            : false
          }
        >
          Войти
        </Button>
      </form>
    </main>
  );
}

export default withRouter(Login);
