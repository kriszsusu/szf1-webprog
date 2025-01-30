function toggleExtraField() {
    const gender = document.getElementById('gender').value;
    const container = document.getElementById('extraFieldContainer');
    
    if (gender === 'no') {
        container.innerHTML = `
            <div class="form-group">
                <label for="title">Cím (opcionális)</label>
                <input type="text" id="title">
            </div>
        `;
    } else {
        container.innerHTML = '';
    }
}

function validateForm(event) {
    event.preventDefault();
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = '';
    
    const requiredFields = {
        name: 'Név',
        gender: 'Neme',
        birthdate: 'Születési dátum',
        email: 'Email'
    };

    const missingFields = [];
    
    for (const [fieldId, fieldName] of Object.entries(requiredFields)) {
        const element = document.getElementById(fieldId);
        if (!element.value.trim()) {
            missingFields.push(fieldName);
        }
    }

    if (missingFields.length > 0) {
        messageDiv.className = 'error';
        messageDiv.innerHTML = `Hiányzó adatok: ${missingFields.join(', ')}!`;
        return false;
    }

    messageDiv.className = 'success';
    messageDiv.innerHTML = 'Sikeres regisztráció!';
    return false;
}