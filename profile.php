<?php
  session_start();

  if(!$_SESSION['user']) {
    header('Location: /');
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
  <link rel="stylesheet" href="/css/profile.css">
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
          <a href="#scroll" class="nav__list__item">О Нас</a>
        </li>
        <li class="nav__list">
          <a href="#servicing" class="nav__list__item">Наши Сервисы</a>
        </li>
        <li class="nav__list">
          <a href="#portfolio" class="nav__list__item">Портфолио</a>
        </li>
        <li class="nav__list">
          <a href="#blog" class="nav__list__item">Блог</a>
        </li>
        <li class="nav__list">
          <a href="main.php" class="nav__list__item">Регистрация</a>
        </li>
      </ul>

    </div>

    <form>
      <img src="<?= $_SESSION['user']['avatar'] ?>" alt="">
      <h2><?= $_SESSION['user']['full_name'] ?></h2>
      <a href="#" class="btn btn-profile"><?= $_SESSION['user']['email'] ?></a>
      <a href="vendor/logout.php" class="btn btn-profile">Выход</a>
    </form>

  </div>

  <div class="footer">
    <p class="footer__parag">All rights Reserved © 2017</p>
  </div>

</body>
</html>
