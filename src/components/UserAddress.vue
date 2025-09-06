<template>
  <div class="form-container">
    <div class="back-link">
      <span class="arrow">←</span>
      <a href="/home">Back to Home</a>
    </div>

   
    <h2 class="form-title">Create Your Account</h2>
    <p class="step-info">Step 2 of 4</p>

    <div class="steps">
      <div class="step active">✔</div>
      <div class="step active">✔</div>
      <div class="step">3</div>
      <div class="step">4</div>
    </div>
    <div class="progress-bar">
      <div class="progress" style="width: 50%"></div>
    </div>

    <div class="form-card">
      <h3><span class="icon">📍</span> Address Information</h3>

      <form>
        <div class="form-row">
          <div class="form-group full-width">
            <label>Street Address *</label>
            <input type="text" required />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>City *</label>
            <input type="text" required />
          </div>
          <div class="form-group">
            <label>State/Province *</label>
            <input type="text" required />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>ZIP/Postal Code *</label>
            <input type="text" required />
          </div>
          <div class="form-group">
            <label>Country *</label>
            <select required>
              <option value="">Select country</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
              <option>Canada</option>
            </select>
          </div>
        </div>

        <!-- Buttons -->
        <div class="form-actions">
          <router-link to="/personal">
            <button type="button" class="btn prev">Previous</button>
          </router-link>
          <router-link to="/financial">
            <button type="button" class="btn next">Next</button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserAddress",
};
</script>

<style src="@/assets/form.css"></style>
