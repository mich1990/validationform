import React, { useState } from "react";
const styles = {
  margin: 8,
  form: {
    display: "inline-grid",
  },
  label: {
    padding: 8,
    fontSize: 20,
  },
  paragraph: {
    paddingTop: 20,
    fontSize: 24,
    margin: 0,
  },
  input: {
    borderRadius: 8,
  },
  button:{
    borderRadius: 8,
    backgroundColor: '#61DAFB',
    margin: 8,
    decoration: 'none'
  },
  error: {
      fontSize: 15,
      color: 'red'
  }
};


function Form() {
    var validationList = ['name', 'email', 'bio', 'sex', 'terms']
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [sex, setSex] = useState('');
    const [terms, setTerms] = useState(false);

    const handleSubmit = (event) =>{
        for( var i = 0, len = validationList.length; i < len; i++){
            
            var cb = document.getElementById(validationList[i]);
            console.log('Validating ' + cb.name + ' ' + cb.value);
            if(cb.value === ''){
                cb.style.border = '3px solid red';
            }
            else{
                cb.style.border = '3px solid black'
            }
            var termsError = document.getElementById('termsError');
            if(!terms){
                termsError.innerText = 'Prosze zaakceptowac regulamin'
            }
            else{
                termsError.innerText = ''
            }
            var sexError = document.getElementById('sexError');
            if(sex === ''){
                sexError.innerText = 'Prosze wybrac plec'
            }
            else{
                sexError.innerText = ''
            }
        }
    }

  return (
    <div style={styles}>
      <form style={styles.form}>
        <div style={styles}>
          <label style={styles.label} >
            Imie:
          </label>
          <input style={styles.input} type="text" id="name" name="name" 
            onChange={(e) => {
              setName(e.target.value || '');}} 
              />
        </div>
        <div style={styles}>
          <label style={styles.label} >
            Email:
          </label>
          <input style={styles.input} type="text" id="email" name="email" 
            onChange={(e) => {
                setEmail(e.target.value);}}
          />
        </div>
        <div style={styles}>
          <label style={styles.label}>
            Biografia:
          </label>
          <textarea style={styles.input} type="text" id="bio" name="bio" 
            onChange={(e) => {
                setBio(e.target.value);}}
          />
        </div>

        <div style={styles}>
          <p style={styles.paragraph}>Plec:</p>
          <p style={styles.error}  id="sexError"></p>
          <input
            style={styles.input}
            type="radio"
            id="sex"
            name="sex"
            value="Male"
            onChange={(e) => {
                setSex(e.target.value);}}
          />Male<br/>
            <input
            style={styles.input}
            type="radio"
            id="sex"
            name="sex"
            value="Female"
            onChange={(e) => {
                setSex(e.target.value);}}
          />Female<br/>
        </div>
        <div>
          <label>Regulamin</label>
          <input type="checkbox" name="terms" id="terms" 
            onChange={(e) => {
                setTerms(!terms);}}
          />
          <p style={styles.error} id="termsError"></p>
        </div>
        <button style={styles.button} type="button"
            onClick={(e) => handleSubmit(e)}
        >Submit</button>
        <div style={styles} className="submitMessage"></div>
      </form>
    </div>
  );
}

export default Form;
