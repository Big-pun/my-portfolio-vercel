import { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Enregistre les composants nécessaires de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

function Languages() {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Remplace 'ton_nom_utilisateur' par ton nom d'utilisateur GitHub
  const username = 'Big-pun';

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await reposResponse.json();

        const languageData = {};

        // Récupère les langages pour chaque dépôt
        for (let repo of repos) {
          const languagesResponse = await fetch(repo.languages_url);
          const repoLanguages = await languagesResponse.json();

          // Ajoute les langages utilisés dans ce dépôt
          for (let [language, bytes] of Object.entries(repoLanguages)) {
            languageData[language] = (languageData[language] || 0) + bytes;
          }
        }

        setLanguages(languageData);
        setLoading(false);
      } catch (error) {
        setError('Erreur de récupération des langages');
        setLoading(false);

      }
    };

    fetchLanguages();
  }, [username]);

  // Si la récupération est en cours
  if (loading) {
    return <p>Chargement...</p>;
  }

  // Si une erreur est survenue
  if (error) {
    return <p>{error}</p>;
  }

  // Prépare les données pour le graphique en camembert
  const data = {
    labels: Object.keys(languages),
    datasets: [
      {
        label: 'Langages',
        data: Object.values(languages),
        backgroundColor: Object.keys(languages).map((_, index) => `hsl(${(index * 360) / Object.keys(languages).length}, 70%, 60%)`), // Génère une couleur différente pour chaque secteur
        borderColor: Object.keys(languages).map((_, index) => `hsl(${(index * 360) / Object.keys(languages).length}, 70%, 50%)`),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw} bytes`,
        },
      },
    },
    rotation: -90,
    circumference: 180,
  };

  return (
      <div>
        <Pie data={data} options={options} />
      </div>
  );
}

export default Languages;
