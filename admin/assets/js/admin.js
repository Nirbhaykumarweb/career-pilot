document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('[data-bs-toggle="modal"]');
    toggleButtons.forEach((button) => {
        button.addEventListener('click', function () {
            const target = this.getAttribute('data-bs-target');
            if (target) {
                const modal = document.querySelector(target);
                if (modal) {
                    const bsModal = new bootstrap.Modal(modal);
                    bsModal.show();
                }
            }
        });
    });

    const deleteButtons = document.querySelectorAll('[data-delete]');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', function () {
            if (confirm('Delete this record?')) {
                const row = this.closest('tr');
                if (row) row.remove();
            }
        });
    });

    const searchInput = document.getElementById('adminSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const term = this.value.toLowerCase();
            document.querySelectorAll('table tbody tr').forEach((row) => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(term) ? '' : 'none';
            });
        });
    }

    const addCompanyForm = document.getElementById('addCompanyForm');
    if (addCompanyForm) {
        addCompanyForm.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Company added successfully (mock action).');
            const modal = bootstrap.Modal.getInstance(document.getElementById('addCompanyModal'));
            modal.hide();
        });
    }

    const addQuestionForm = document.getElementById('addQuestionForm');
    if (addQuestionForm) {
        addQuestionForm.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Question added successfully (mock action).');
            const modal = bootstrap.Modal.getInstance(document.getElementById('addQuestionModal'));
            modal.hide();
        });
    }
});
