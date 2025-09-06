<template>
  <div class="form-container">
    <div class="back-link">
      <span class="arrow">←</span>
      <a href="/home">Back to Home</a>
    </div>

   
    <h2 class="form-title">Create Your Account</h2>
    <p class="step-info">Step 1 of 4</p>

    
    <div class="steps">
      <div class="step active">✔</div>
      <div class="step">2</div>
      <div class="step">3</div>
      <div class="step">4</div>
    </div>
    <div class="progress-bar">
      <div class="progress"></div>
    </div>

    
    <div class="form-card">
      <h3><span class="icon">👤</span> Personal Information</h3>

      <form>
        <div class="form-row">
          <div class="form-group">
            <label>First Name *</label>
            <input type="text" required />
          </div>
          <div class="form-group">
            <label>Last Name *</label>
            <input type="text" required />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Email Address *</label>
            <input type="email" required />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Phone Number *</label>
            <input type="text" required />
          </div>
          <div class="form-group">
            <label>Date of Birth *</label>
            <input type="date" required />
          </div>
        </div>

       <div class="form-actions">
   <router-link to="/step1">
    <button type="button" class="btn prev" disabled>Previous</button>
  </router-link>

  <router-link to="/address">
    <button type="button" class="btn next">Next</button>
  </router-link>
</div>

      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalInfo",
};
</script>
<style src="@/assets/form.css"></style>

