<template>
  <div class="form-container">
   
    <div class="back-link">
      <span class="arrow">←</span>
      <a href="/home">Back to Home</a>
    </div>

    
    <h2 class="form-title">Create Your Account</h2>
    <p class="step-info">Step 4 of 4</p>

    <div class="steps">
      <div class="step active">✔</div>
      <div class="step active">✔</div>
      <div class="step active">✔</div>
      <div class="step active">✔</div>
    </div>
    <div class="progress-bar">
      <div class="progress" style="width: 100%"></div>
    </div>

   
    <div class="form-card">
      <h3><span class="icon">🛡️</span> Account Setup & Agreements</h3>

      <form>
       
        <div class="form-row">
          <div class="form-group full-width">
            <label>Account Type *</label>
            <select required>
               <option value="">Select account type</option>
            <option>Individual Taxable</option>
            <option>Traditional IRA</option>
            <option>Roth IRA</option>
            <option>Joint Account</option>

            </select>
          </div>
        </div>

        
        <div class="form-row">
          <div class="form-group full-width">
            <label>Initial Deposit Amount *</label>
            <select required>
              <option value="">Select initial deposit</option>
            <option>$12,500-$25,000</option>
            <option>$25,000-$50,000</option>
            <option>$50,000-$250,000</option>
            <option>$250,000-$500,000</option>
            <option>Over $500,000</option>

            </select>
          </div>
        </div>

       
        <div class="agreements">
          <label class="checkbox">
            <input type="checkbox" required />
            I agree to the
            <a href="#">Terms of Service</a> and
            <a href="#">Investment Agreement</a> *
          </label>

          <label class="checkbox">
            <input type="checkbox" required />
            I agree to the <a href="#">Privacy Policy</a> *
          </label>

          <label class="checkbox">
            <input type="checkbox" />
            I would like to receive investment insights and market updates via email
          </label>
        </div>

       
        <div class="form-actions">
          <router-link to="/financial">
            <button type="button" class="btn prev">Previous</button>
          </router-link>
          <button type="submit" class="btn submit">
            Create Account ✔
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserAgreements",
};
</script>

<style src="@/assets/form.css"></style>
