<?php
  session_start();

  if($_SESSION['user']) {
    header('Location: profile.php');
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Authorization</title>
  <link rel="stylesheet" href="/css/primary.css">
  <link rel="stylesheet" href="/css/main.css">
</head>
<body>

  <div class="container">

    <div class="header__top">
      <p class="header__top__heading">Your Logo</p>

      <ul class="header__top__nav">
        <li class="nav__list">
          <a href="index.html" class="nav__list__item">Домой</a>
        </li>
        <li class="nav__list">
          <a href="index.html#scroll" class="nav__list__item">О Нас</a>
        </li>
        <li class="nav__list">
          <a href="index.html#servicing" class="nav__list__item">Наши Сервисы</a>
        </li>
        <li class="nav__list">
          <a href="index.html#portfolio" class="nav__list__item">Портфолио</a>
        </li>
        <li class="nav__list">
          <a href="index.html#blog" class="nav__list__item">Блог</a>
        </li>
        <li class="nav__list">
          <a href="main.php" class="nav__list__item">Регистрация</a>
        </li>
      </ul>

    </div>

    <form class="auth-form auth-form-register" action="vendor/signup.php" method="post" enctype="multipart/form-data">

        <label class="auth-form__label">ФИО</label>
        <input class="auth-form__input" type="text" name="full_name" placeholder="Enter your Full name">

        <label class="auth-form__label">Логин</label>
        <input class="auth-form__input" type="text" name="login" placeholder="Enter your login">

        <label class="auth-form__label">Эл.адрес</label>
        <input class="auth-form__input" type="email" name="email" placeholder="Enter your email">

        <label class="auth-form__label">Фото</label>
        <input class="auth-form__input" type="file" name="avatar">

        <label class="auth-form__label">Пароль</label>
        <input class="auth-form__input" type="password" name="password" placeholder="Enter your password">

        <label class="auth-form__label">Подтверждение пароля</label>
        <input class="auth-form__input" type="password" name="password_confirm" placeholder="Enter your password confirmation">

        <button class="btn auth-form__btn" type="submit">Зарегистрироваться</button>
        <div class="register">Уже есть аккаунт? - <a href="main.php">Войдите</a>!</div>

          <?php
            if ($_SESSION['message']) {
              echo '<p class="error"> ' . $_SESSION['message'] . ' </p>';
            }
            unset($_SESSION['message']);
          ?>
      </form>



  </div>
  <div class="footer">
    <p class="footer__parag">Все права защищены © 2020</p>
  </div>

</body>
</html>
