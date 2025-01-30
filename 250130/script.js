function toggleExtraField() {
const container = document.getElementById('extracont');
const gender = document.getElementById('gender').value;

if (gender === 'no') {
container.innerHTML = `
<div class="formgroup">
<label for="title" class="req">Leánykori neve</label>
<input type="text" id="leanykori">
</div>
`;
} else {
container.innerHTML = '';
}
}

function validateForm(event) {
const gender = document.getElementById('gender').value;
event.preventDefault();
const messageDiv = document.getElementById('message');
messageDiv.innerHTML = '';

const requiredFields = {
name: 'Név',
gender: 'Neme',
birthdate: 'Születési dátum',
email: 'Email',
};

if(gender === 'no') {
requiredFields['leanykori'] = "Leánykori neve";
}

const missingFields = [];

for (const [fieldId, fieldName] of Object.entries(requiredFields)) {
const element = document.getElementById(fieldId);
if (!element.value.trim()) {
missingFields.push(fieldName);
}
}

if (missingFields.length > 0) {
messageDiv.className = 'error';
messageDiv.innerHTML = `Hiányzó adatok: ${missingFields.join(', ')}`;
return false;
}

messageDiv.className = 'success';
messageDiv.innerHTML = 'Sikeres regisztráció!';
return false;
}