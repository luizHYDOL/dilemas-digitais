document.addEventListener('DOMContentLoaded', () => {
  const hoursInput = document.getElementById('hours');
  const calcBtn = document.getElementById('calc-btn');
  const resultDiv = document.getElementById('result');

  calcBtn.addEventListener('click', () => {
    const hours = parseFloat(hoursInput.value);

    if (isNaN(hours) || hours < 0 || hours > 24) {
      resultDiv.textContent = 'Por favor, insira um número válido entre 0 e 24.';
      resultDiv.classList.remove('hidden');
      return;
    }

    const totalHoursPerYear = hours * 365;
    const totalDaysPerYear = (totalHoursPerYear / 24).toFixed(1);
    const percentageOfYear = ((hours / 24) * 100).toFixed(0);

    resultDiv.innerHTML = `
      <p>Em um ano, você passa cerca de <strong>${totalDaysPerYear} dias inteiros</strong> (ou ${totalHoursPerYear.toLocaleString('pt-BR')} horas) olhando para telas.</p>
      <p>Isso representa <strong>${percentageOfYear}%</strong> de todo o seu tempo de vida ao longo do ano.</p>
    `;
    
    resultDiv.classList.remove('hidden');
  });
});