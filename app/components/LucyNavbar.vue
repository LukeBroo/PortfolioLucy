<script setup>
  const {locales, setLocale} = useI18n();
  const isMobileMenuOpen = ref(false);

  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
    updateBodyOverflow();
  };

  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false;
    updateBodyOverflow();
  };

  const updateBodyOverflow = () => {
    if (import.meta.client) {
      if (isMobileMenuOpen.value) {
        document.body.style.overflowX = "hidden";
      } else {
        document.body.style.overflowX = "";
      }
    }
  };

  // Cleanup on unmount
  onBeforeUnmount(() => {
    if (import.meta.client) {
      document.body.style.overflowX = "";
    }
  });
</script>
<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo po lewej -->
      <div class="navbar-brand">
        <h2>{{ $t("brand") }}</h2>
      </div>
      <!-- Desktop Menu po środku -->
      <ul class="navbar-menu desktop-menu">
        <li>
          <a href="#about" class="navbar-link">{{ $t("nav.about") }}</a>
        </li>
        <li>
          <a href="#experience" class="navbar-link">{{
            $t("nav.experience")
          }}</a>
        </li>
        <li>
          <a href="#portfolio" class="navbar-link">{{ $t("nav.portfolio") }}</a>
        </li>
        <li>
          <a href="#contact" class="navbar-link">{{ $t("nav.contact") }}</a>
        </li>
      </ul>
      <!-- Desktop - Języki po prawej -->
      <div class="language-switcher desktop-lang">
        <button
          v-for="locale in locales"
          :key="locale.code"
          @click="setLocale(locale.code)"
          :class="{active: locale.code === $i18n.locale}"
          class="lang-button">
          {{ locale.code.toUpperCase() }}
        </button>
      </div>
      <!-- Mobile - Hamburger Menu -->
      <button class="mobile-menu-toggle" @click="toggleMobileMenu">
        <Icon name="heroicons:bars-3" size="24" />
      </button>
    </div>
    <!-- Mobile Menu Overlay -->
    <div
      class="mobile-menu-overlay"
      :class="{active: isMobileMenuOpen}"
      @click="closeMobileMenu">
      <div class="mobile-menu" @click.stop>
        <!-- Przycisk zamknięcia X w prawym górnym rogu -->
        <button class="mobile-close-btn" @click="closeMobileMenu">
          <Icon name="heroicons:x-mark" size="24" />
        </button>

        <ul class="mobile-menu-list">
          <li>
            <a href="#about" class="mobile-link" @click="closeMobileMenu">
              {{ $t("nav.about") }}
            </a>
          </li>
          <li>
            <a href="#experience" class="mobile-link" @click="closeMobileMenu">
              {{ $t("nav.experience") }}
            </a>
          </li>
          <li>
            <a href="#portfolio" class="mobile-link" @click="closeMobileMenu">
              {{ $t("nav.portfolio") }}
            </a>
          </li>
          <li>
            <a href="#contact" class="mobile-link" @click="closeMobileMenu">
              {{ $t("nav.contact") }}
            </a>
          </li>
        </ul>
        <!-- Mobile Language Switcher -->
        <div class="mobile-language-switcher">
          <button
            v-for="locale in locales"
            :key="locale.code"
            @click="
              setLocale(locale.code);
              closeMobileMenu();
            "
            :class="{active: locale.code === $i18n.locale}"
            class="mobile-lang-button">
            {{ locale.code.toUpperCase() }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
  @import "~/assets/scss/variables";
  .navbar {
    background-color: rgba(255, 255, 255, 1);
    backdrop-filter: blur(10px);
    position: sticky;
    top: 0;
    z-index: 100;
    padding: 1rem 0;
    &-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      align-items: center;
      gap: 2rem;
      @media (max-width: 964px) {
        grid-template-columns: 1fr auto;
        gap: 1rem;
      }
    }
    &-brand {
      justify-self: start;
      h2 {
        color: $text-primary;
        font-size: 1.5rem;
        font-weight: 600;
        cursor: pointer;
      }
    }
    &-menu {
      justify-self: center;
      display: flex;
      list-style: none;
      gap: 1.5rem;
      margin: 0;
      li {
        white-space: nowrap;
        margin: 0;
      }
    }
    &-link {
      color: $text-secondary;
      text-decoration: none;
      font-weight: 500;
      padding: 0.5rem 1rem;
      border-radius: $border-radius;
      position: relative;
      display: inline-block;
      &::after {
        content: "";
        position: absolute;
        bottom: 0.3rem;
        left: 1rem;
        width: 0;
        height: 2px;
        background-color: $accent;
        transition: width 0.5s ease-out;
      }
      &:hover {
        color: $accent;
        &::after {
          width: calc(100% - 2rem);
        }
      }
    }
  }
  .language-switcher {
    justify-self: end;
    display: flex;
    gap: 0.2rem;
    .lang-button {
      background: none;
      border: none;
      color: $text-secondary;
      text-decoration: none;
      font-weight: 500;
      transition: $transition;
      padding: 0.5rem 1rem;
      border-radius: $border-radius;
      cursor: pointer;
      font-size: 0.9rem;
      &:hover {
        color: $accent;
        background-color: rgba(139, 95, 191, 0.1);
      }
      &.active {
        color: $accent;
        background-color: rgba(139, 95, 191, 0.15);
        font-weight: 600;
      }
    }
  }
  // Mobile styles
  .mobile-menu-toggle {
    display: none;
    background: none;
    border: none;
    color: $text-primary;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: $border-radius;
    transition: $transition;
    &:hover {
      background-color: rgba(139, 95, 191, 0.1);
    }
  }
  .desktop-menu,
  .desktop-lang {
    @media (max-width: 964px) {
      display: none;
    }
  }
  @media (max-width: 964px) {
    .mobile-menu-toggle {
      display: block;
    }
  }
  // Mobile Menu Overlay
  .mobile-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    overflow-x: hidden;
    &.active {
      opacity: 1;
      visibility: visible;
    }
  }
  .mobile-menu {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    max-width: 400px;
    height: 100vh;
    background-color: $bg-primary;
    padding: 2rem;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    overflow-x: hidden;
    .mobile-menu-overlay.active & {
      transform: translateX(0);
    }
  }

  .mobile-close-btn {
    position: absolute;
    top: 1rem;
    right: 2rem;
    background: none;
    border: none;
    color: $text-primary;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: $border-radius;
    transition: $transition;

    &:hover {
      background-color: rgba(139, 95, 191, 0.1);
      color: $accent;
    }
  }

  .mobile-menu-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 4rem;
    li {
      margin: 0;
    }
  }
  .mobile-link {
    display: block;
    color: $text-primary;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.2rem;
    padding: 1rem;
    border-radius: $border-radius;
    transition: $transition;
    &:hover {
      background-color: rgba(139, 95, 191, 0.1);
      color: $accent;
    }
  }
  .mobile-language-switcher {
    display: flex;
    gap: 0.5rem;
    margin-top: auto;
    .mobile-lang-button {
      background: none;
      border: 2px solid $accent;
      color: $accent;
      padding: 0.8rem 1.5rem;
      border-radius: $border-radius;
      cursor: pointer;
      font-weight: 600;
      transition: $transition;
      flex: 1;
      &:hover {
        background-color: $accent;
        color: white;
      }
      &.active {
        background-color: $accent;
        color: white;
      }
    }
  }
</style>
