document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('calculate-btn').addEventListener('click', () => {
    let punkte = 0;

    // Stammesmitglieder
    const eigeneEigener = parseInt(document.getElementById('eigene-eigener-stamm').value) || 0;
    const fremdeEigener = parseInt(document.getElementById('fremde-im-eigenen').value) || 0;
    const eigeneFremder = parseInt(document.getElementById('eigene-in-fremden').value) || 0;
    punkte += eigeneEigener * 1;
    punkte -= fremdeEigener * 1;
    punkte += eigeneFremder * 1;

    // Nahrung
    const mais = parseInt(document.getElementById('mais').value) || 0;
    const lachs = parseInt(document.getElementById('lachs').value) || 0;
    const bison = parseInt(document.getElementById('bison').value) || 0;
    punkte += mais * 2;
    punkte += lachs * 3;
    punkte += bison * 4;

    // Gefangene
    const gefangene = parseInt(document.getElementById('gefangene').value) || 0;
    punkte += gefangene;

    // Totem-Punkte
    document.querySelectorAll('.totem:checked').forEach(totem => {
      const type = totem.dataset.type;
      let faktor = 0;
      let anzahl = 0;

      switch (type) {
        case 'kundschafter':
          faktor = 2;
          anzahl = parseInt(document.getElementById('kundschafter').value) || 0;
          break;
        case 'aeltester':
          faktor = 2;
          anzahl = parseInt(document.getElementById('aeltester').value) || 0;
          break;
        case 'schamane':
          faktor = 2;
          anzahl = parseInt(document.getElementById('schamane').value) || 0;
          break;
        case 'krieger':
          faktor = 2;
          anzahl = parseInt(document.getElementById('krieger').value) || 0;
          break;
        case 'mais':
          faktor = 1;
          anzahl = mais;
          break;
        case 'lachs':
          faktor = 1;
          anzahl = lachs;
          break;
        case 'bison':
          faktor = 2;
          anzahl = bison;
          break;
      }

      punkte += faktor * anzahl;
    });

    document.getElementById('ergebnis').textContent = punkte;
  });
});
