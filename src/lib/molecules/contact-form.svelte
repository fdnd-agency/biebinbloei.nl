<!-- @migration-task Error while migrating Svelte code: Event attribute must be a JavaScript expression, not a string
https://svelte.dev/e/attribute_invalid_event_handler -->
<script>

import { onMount } from 'svelte';

let name = '';
let lastname = '';
let email = '';
let message = '';
let contactReason = 'question';

onMount(() => {
    const savedData = JSON.parse(localStorage.getItem('formData') || '{}');
    name = savedData.name || '';
    lastname = savedData.lastname || '';
    email = savedData.email || '';
    message = savedData.message || '';
    contactReason = savedData['contact-reason'] || 'question';
});

// Save to localStorage on input
function saveToLocalStorage() {
    const formData = { name, lastname, email, message, 'contact-reason': contactReason };
    localStorage.setItem('formData', JSON.stringify(formData));
}

function handleSubmit(event) {
    localStorage.removeItem('formData');
}

</script>

<form action="https://api.web3forms.com/submit" method="POST" on:submit={handleSubmit}>
    
    <input type="hidden" name="access_key" value="8b3a20d3-a650-44f4-80df-a5b93d5b251b">
    <input type="checkbox" name="botcheck" id="" style="display: none;">

    <fieldset class="question">
        <legend>Reden voor contact:</legend>
        <label for="question">Ik heb een vraag</label>
        <input class="radio-question" type="radio" id="question" name="contact-reason" value="question" bind:group={contactReason} 
        on:change={saveToLocalStorage} checked />

        <label for="workshop">Ik wil mij aanmelden voor een workshop</label>
        <input class="radio-question" type="radio" id="workshop" name="contact-reason" value="workshop" bind:group={contactReason} 
        on:change={saveToLocalStorage} />
    </fieldset>

    <div class="fields-container">
        <div>
            <label for="name">Voornaam:<span aria-hidden="true">*</span></label>
            <input type="text" id="name" name="name" placeholder="Voer je voornaam in" required bind:value={name} 
            on:input={saveToLocalStorage}
            on:invalid={() => event.target.setCustomValidity('Vul hier uw voornaam in')}
            on:input={() => event.target.setCustomValidity('')} />

        </div>
        
        <div>
            <label for="lastname">Achternaam:<span aria-hidden="true">*</span></label>
            <input type="text" id="lastname" name="lastname" placeholder="Voer je achternaam in" required bind:value={lastname} 
            on:input={saveToLocalStorage}
            on:invalid={() => event.target.setCustomValidity('Vul hier uw achternaam in')}
            on:input={() => event.target.setCustomValidity('')} />
        </div>
        
        <div>
            <label for="email">E-mail:<span aria-hidden="true">*</span></label>
            <input type="email" id="email" name="email" placeholder="Voer je e-mailadres in" required bind:value={email} 
            on:input={saveToLocalStorage}
            on:invalid={() => event.target.setCustomValidity('Vul hier uw e-mail in')}
            on:input={() => event.target.setCustomValidity('')} />
        </div>
        
        <label for="message">Stel je vraag of vertel voor welke workshop je je wilt aanmelden!<span aria-hidden="true">*</span></label>
        <textarea id="message" name="message" cols="30" rows="10" placeholder="Typ hier je bericht" required bind:value={message} 
            on:input={saveToLocalStorage} 
            on:invalid={() => event.target.setCustomValidity('Vul hier uw vraag of bericht in')}
            on:input={() => event.target.setCustomValidity('')} ></textarea>
    </div>

    <button type="submit" value="Verzenden">Verzenden</button>
</form>


<style>

:root {
    --invalid-color-red: #ff0000;
	--invalid-input-background: #fffcfc;
	--valid-input-background: #edffed;
	--input-focus-color: #fafad2;
	--input-border-color: #B37400;
	--input-border-shadow: 0px 2px 4px hsl(32 37% 39% / 1);    
}

/* algemene form styling */
form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1.25em;
    margin-top: 2rem;
    color: var(--card-color-green);
    font-family: var(--sub-header-font);
}

fieldset {
    display: flex;
    flex-direction: column;
    border: none;
    gap: .5em;
    transition: all .2s;
}

input,
textarea,
button {
    font-family: var(--paragraph-font);
    z-index: 10;
}

::placeholder {
    color: #545454;
}

.question{
    display: grid;
    grid-template-columns: 1.5em 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: 
        'radio1 question1' 
        'radio2 question2'
    ;
}

.question legend{
    padding: .5em 0;
}

.question input:nth-of-type(1) {
    grid-area: radio1;
}

.question input:nth-of-type(2) {
    grid-area: radio2;
}

.question label:nth-of-type(1) {
    grid-area: question1;
}

.question label:nth-of-type(2) {
    grid-area: question2;
}

.radio-question{
    grid-area: radio;
    width: 1.5em;
    height: 1.5em;
    accent-color: var(--main-color-green);
    margin-right: .5em;
    cursor: pointer;
}

.fields-container label {
    display: block;
    margin-bottom: 0.5em; 
}

.fields-container input {
    margin-bottom: 1.5em;
}

/* input fields styling */
.fields-container input[type='text'],
.fields-container input[type='email'],
.fields-container textarea { 
    border: none;
    padding: 0.75rem;
    box-shadow: var(--input-border-shadow);
    border-radius: var(--border-card);
    width: 100%;
}

/* form focus styling  */
.fields-container input[type='text']:focus,
.fields-container input[type='email']:focus,
.fields-container textarea:focus { 
    outline: 2px solid var(--input-border-color);
    background-color: var(--input-focus-color);
}

/* form focus valid styling */
.fields-container input[type='text']:valid,
.fields-container input[type='email']:valid,
.fields-container textarea:valid { 
    outline: 2px solid var(--main-color-green);
    background-color: var(--valid-input-background);
}

/* form focus invalid styling*/
.fields-container input[type='text']:user-invalid,
.fields-container input[type='email']:user-invalid,
.fields-container textarea:user-invalid { 
    outline: 2px solid var(--invalid-color-red);
    background-color: var(--invalid-input-background);
}

/* submit button styling */
button[type='submit'] {
    border-radius: 2em;
    padding: 0.4em 1em;
    text-decoration: none;
    font-size: 1em;
    transition: ease-in .1s;
    background-color: var(--main-color-green);
    color: var(	--text-color-white);
    border: none;
    cursor: pointer;
    width: 8rem;    
    margin: .5em 0;
}

button[type='submit']:hover {
    background-color: var(--main-color-orange);
}

/* animated form valid styling */

.fields-container div {
    display: flex;
    flex-direction: column;
    position: relative;
}

.fields-container div::after {
    content: "";
    position: absolute;
    top: -0.15rem;
    right: 10px;
    width: 40px;
    height: 40px;
    scale: 0.5;
    background-image: url('/assets/plant.svg');
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0;
    z-index: 1;
    transform: translateY(100%);
    transition: all 0.5s cubic-bezier(.75,-0.5,0,1.75);
}

@media (prefers-reduced-motion: no-preference) {

    /* Plant valid animation */

    .fields-container div:has(input:valid)::after {
        opacity: 1;
        scale: 1;
        transform: translateY(0);
    }

    .fields-container div:has(input:focus)::after,
    .fields-container div:has(input:focus:valid)::after {
        transform: translateY(20%);
        opacity:1;
        scale: 1;
        transition-delay: .3s;
    }
}

@media (min-width: 50rem) and (max-width: 64rem) {
		form {
			margin-bottom: 2em;
		}
	}

    @media (min-width: 37.5rem) and (max-width: 50rem) {
		form {
			margin-bottom: 2em;
		}
	}

</style>