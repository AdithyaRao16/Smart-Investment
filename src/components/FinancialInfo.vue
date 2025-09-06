<template>
  <div class="form-container">
    <!-- Back Navigation -->
    <div class="back-link">
      <span class="arrow">←</span>
      <a href="/home">Back to Home</a>
    </div>

  
    <h2 class="form-title">Create Your Account</h2>
    <p class="step-info">Step 3 of 4</p>

   
    <div class="steps">
      <div class="step active">✔</div>
      <div class="step active">✔</div>
      <div class="step active">✔</div>
      <div class="step">4</div>
    </div>
    <div class="progress-bar">
      <div class="progress" style="width: 75%"></div>
    </div>

    
    <div class="form-card">
      <h3><span class="icon">🎁</span> Financial Profile</h3>

      <form>
        <div class="form-row">
          <div class="form-group full-width">
            <label>Employment Status *</label>
            <select required placeholder="Select employment status">
               <option value="">Select employment status</option>
            <option>Employed Full-Time</option>
            <option>Employed Part-Time</option>
            <option>Self-Employed</option>
            <option>Student</option>
            <option>Retired</option>
            <option>Unemployed</option>

            </select>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group full-width">
            <label>Annual Income *</label>
            <select required>
              <option value="">Select income range</option>
            <option>Under $25,000</option>
            <option>$25,000 - $50,000</option>
            <option>$50,000 - $100,000</option>
            <option>$100,000 - $250,000</option>
            <option>Over $250,000</option>

            </select>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group full-width">
            <label>Investment Experience *</label>
            <select required>
               <option value="">Select experience level</option>
            <option>Beginner (0-1 years)</option>
            <option>Intermediate (2-5 years)</option>
            <option>Experienced (5+ years)</option>
            <option>Expert (10+ years)</option>

            </select>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group full-width">
            <label>Risk Tolerance *</label>
            <select required>
              <option value="">Select risk tolerance</option>
            <option>Conservative</option>
            <option>Moderate</option>
            <option>Aggresive</option>

            </select>
          </div>
        </div>

        <!-- Buttons -->
        <div class="form-actions">
          <router-link to="/address">
            <button type="button" class="btn prev">Previous</button>
          </router-link>
          <router-link to="/agreements">
            <button type="button" class="btn next">Next</button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "FinancialInfo",
};
</script>

<style src="@/assets/form.css"></style>
