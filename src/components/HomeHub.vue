<template>
  <div class="home-container">
    
    <section class="hero">
      <div class="hero-content">
        <div class="hero-icon">
          <DollarSign class="w-8 h-8 text-green-500" />
        </div>
        <h1 class="hero-title">Holistic Hub</h1>
        <p class="hero-subtitle">Your Gateway to Smart Investing</p>
        <p class="hero-desc">
          Experience gamified investing with real-time insights, achievement tracking, and
          personalized portfolio management.
        </p>
        <router-link to="/personal">
          <button class="btn-primary">START NOW</button>
        </router-link>
      </div>
    </section>

   
    <section class="products">
      <h2>Investment Products</h2>
      <p class="products-subtitle">
        Choose from our curated selection of investment opportunities
      </p>

      <div class="portfolio-cards-container">
        <!-- Growth Portfolio -->
        <div class="portfolio-card">
          <span class="risk-badge high-risk">High Risk</span>
          <div class="portfolio-header">
            <div class="portfolio-icon growth">
              <TrendingUp class="w-6 h-6 text-red-500" />
            </div>
            <div>
              <h3 class="portfolio-title">Growth Portfolio</h3>
              <p class="portfolio-desc">
                High-growth potential investments for long-term wealth building
              </p>
            </div>
          </div>
          <div class="portfolio-details">
            <div>
              <p>Expected Return</p>
              <span class="highlight">12-15%</span>
            </div>
            <div>
              <p>Minimum Investment</p>
              <span class="highlight black">₱50,000</span>
            </div>
          </div>
          <div class="portfolio-features">
            <h4>Key Features:</h4>
            <ul>
              <li>Diversified stocks</li>
              <li>Tech focus</li>
              <li>Global exposure</li>
            </ul>
          </div>
          <router-link to="/personal">
            <button class="get-started-btn">
              Get Started <ArrowRight class="w-4 h-4 ml-2" />
            </button>
          </router-link>
        </div>

        
        <div class="portfolio-card">
          <span class="risk-badge medium-risk">Medium Risk</span>
          <div class="portfolio-header">
            <div class="portfolio-icon balanced">
              <PieChart class="w-6 h-6 text-red-500" />
            </div>
            <div>
              <h3 class="portfolio-title">Balanced Fund</h3>
              <p class="portfolio-desc">
                Perfect mix of growth and stability for moderate investors
              </p>
            </div>
          </div>
          <div class="portfolio-details">
            <div>
              <p>Expected Return</p>
              <span class="highlight">8-10%</span>
            </div>
            <div>
              <p>Minimum Investment</p>
              <span class="highlight black">₱25,000</span>
            </div>
          </div>
          <div class="portfolio-features">
            <h4>Key Features:</h4>
            <ul>
              <li>Mixed assets</li>
              <li>Regular dividends</li>
              <li>Stable growth</li>
            </ul>
          </div>
          <router-link to="/personal">
            <button class="get-started-btn">
              Get Started <ArrowRight class="w-4 h-4 ml-2" />
            </button>
          </router-link>
        </div>

        
        <div class="portfolio-card">
          <span class="risk-badge low-risk">Low Risk</span>
          <div class="portfolio-header">
            <div class="portfolio-icon conservative">
              <Shield class="w-6 h-6 text-red-500" />
            </div>
            <div>
              <h3 class="portfolio-title">Conservative Bonds</h3>
              <p class="portfolio-desc">
                Low-risk investment option with steady returns
              </p>
            </div>
          </div>
          <div class="portfolio-details">
            <div>
              <p>Expected Return</p>
              <span class="highlight">4-6%</span>
            </div>
            <div>
              <p>Minimum Investment</p>
              <span class="highlight black">₱12,500</span>
            </div>
          </div>
          <div class="portfolio-features">
            <h4>Key Features:</h4>
            <ul>
              <li>Government bonds</li>
              <li>Fixed income</li>
              <li>Capital protection</li>
            </ul>
          </div>
          <router-link to="/personal">
            <button class="get-started-btn">
              Get Started <ArrowRight class="w-4 h-4 ml-2" />
            </button>
          </router-link>
        </div>
      </div>
    </section>

    
    <section class="stats">
      <div class="stat-item">
        <h3>₱125B+</h3>
        <p>Assets Under Management</p>
      </div>
      <div class="stat-item">
        <h3>150K+</h3>
        <p>Active Investors</p>
      </div>
      <div class="stat-item">
        <h3>94%</h3>
        <p>Customer Satisfaction</p>
      </div>
    </section>

    
    <section class="cta">
      <h2>Ready to Start Your Investment Journey?</h2>
      <p>
        Join thousands of investors who trust Holistic Hub for their financial growth
      </p>
      <router-link to="/personal">
        <button class="btn-primary">Create Account</button>
      </router-link>
    </section>
  </div>
</template>

<script setup>
import { DollarSign, TrendingUp, PieChart, Shield, ArrowRight } from "lucide-vue-next";
</script>

<style src="@/assets/home.css"></style>