<script setup>
  const contactInfo = [
    {
      icon: "heroicons:phone",
      label: "Telefon",
      value: "789 307 532",
      link: null,
      clickable: false,
    },
    {
      icon: "heroicons:envelope",
      label: "E-mail",
      value: "kowalska.lucja0907@gmail.com",
      link: "mailto:kowalska.lucja0907@gmail.com",
      clickable: true,
    },
    {
      icon: "heroicons:user-circle",
      label: "LinkedIn",
      value: "linkedin.com/in/kowalskalucja0907",
      link: "https://www.linkedin.com/in/kowalskalucja0907",
      clickable: true,
    },
  ];
</script>
<template>
  <section id="contact" class="contact-section">
    <div class="contact-container">
      <!-- Header -->
      <div class="contact-header">
        <h2 class="contact-title">{{ $t("contact.title") }}</h2>
      </div>
      <!-- Contact Cards -->
      <div class="contact-grid">
        <component
          :is="item.clickable ? 'a' : 'div'"
          v-for="item in contactInfo"
          :key="item.label"
          :href="item.link"
          :target="item.clickable ? '_blank' : undefined"
          :rel="item.clickable ? 'noopener' : undefined"
          class="contact-card"
          :class="{'contact-card--static': !item.clickable}">
          <div class="contact-icon">
            <Icon :name="item.icon" size="28" />
          </div>

          <div class="contact-info">
            <div class="contact-label">{{ item.label }}</div>
            <div class="contact-value">{{ item.value }}</div>
          </div>

          <div v-if="item.clickable" class="contact-arrow">
            <Icon name="heroicons:arrow-right" size="20" />
          </div>
        </component>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  @import "~/assets/scss/variables";

  .contact-section {
    padding: 6rem 0;
    background: linear-gradient(315deg, $bg-secondary 0%, $bg-primary 100%);
    @media (max-width: 964px) {
      padding: 4rem 0;
    }
  }

  .contact-container {
    max-width: 700px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .contact-header {
    text-align: center;
    margin-bottom: 3rem;

    .contact-title {
      font-size: 2.5rem;
      color: $text-primary;
      margin-bottom: 1rem;
      font-weight: 700;

      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }
  }

  .contact-grid {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  .contact-card {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 1.5rem;
    background: white;
    padding: 1.2rem;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(139, 95, 191, 0.1);
    transition: all 0.3s ease;
    text-decoration: none;
    border: 2px solid transparent;

    &:hover {
      box-shadow: 0 15px 50px rgba(139, 95, 191, 0.2);
      border-color: $accent;

      .contact-icon {
        background: $accent;
        color: white;
        transform: scale(1.1);
      }

      .contact-arrow {
        transform: translateX(5px);
        color: $accent;
      }
    }

    // Telefon bez strzałki
    &--static {
      grid-template-columns: auto 1fr;
      cursor: default;
    }

    @media (max-width: 768px) {
      padding: 1.2rem;
      gap: 1rem;
    }
  }

  .contact-icon {
    width: 60px;
    height: 60px;
    background: rgba(139, 95, 191, 0.1);
    color: $accent;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      width: 50px;
      height: 50px;
    }
  }

  .contact-info {
    .contact-label {
      color: $text-secondary;
      font-size: 0.9rem;
      font-weight: 500;
      margin-bottom: 0.3rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .contact-value {
      color: $text-primary;
      font-size: 1.2rem;
      font-weight: 600;
      word-wrap: break-word;
      word-break: break-word;
      overflow-wrap: break-word;

      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }

  .contact-arrow {
    color: $text-secondary;
    transition: all 0.3s ease;
    flex-shrink: 0;
  }
</style>
