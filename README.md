<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Hub - Download Your Favorite Movies</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: #11141a;
            color: #ffffff;
        }

        /* Header Style */
        header {
            background-color: #1a1f29;
            padding: 20px;
            text-align: center;
            border-bottom: 3px solid #ff4757;
        }

        header h1 {
            color: #ff4757;
            font-size: 2.5rem;
            margin-bottom: 10px;
        }

        /* Movie Grid Section */
        .container {
            max-width: 1200px;
            margin: 40px auto;
            padding: 0 20px;
        }

        .movie-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
        }

        /* Movie Card Style */
        .movie-card {
            background-color: #1a1f29;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.5);
            transition: transform 0.3s ease;
        }

        .movie-card:hover {
            transform: translateY(-5px);
        }

        .movie-poster {
            width: 100%;
            height: 350px;
            object-fit: cover;
            background-color: #2a3142; /* Placeholder color if image fails */
        }

        .movie-info {
            padding: 15px;
            text-align: center;
        }

        .movie-title {
            font-size: 1.2rem;
            margin-bottom: 10px;
            font-weight: 600;
        }

        .download-btn {
            display: inline-block;
            background-color: #ff4757;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            transition: background 0.3s;
            width: 100%;
        }

        .download-btn:hover {
            background-color: #e84118;
        }

        /* Footer */
        footer {
            text-align: center;
            padding: 20px;
            background-color: #1a1f29;
            margin-top: 50px;
            color: #718093;
        }
    </style>
</head>
<body>

    <header>
        <h1>🎬 Movie Hub</h1>
        <p>Download Latest HD Movies for Free</p>
    </header>

    <div class="container">
        <div class="movie-grid">
            
            <div class="movie-card">
                <img src="https://via.placeholder.com/300x450" alt="Movie Poster" class="movie-poster">
                <div class="movie-info">
                    <div class="movie-title">Movie Title 1 (2026)</div>
                    <a href="#" class="download-btn" target="_blank">Download [720p]</a>
                </div>
            </div>

            <div class="movie-card">
                <img src="https://via.placeholder.com/300x450" alt="Movie Poster" class="movie-poster">
                <div class="movie-info">
                    <div class="movie-title">Movie Title 2 (2026)</div>
                    <a href="#" class="download-btn" target="_blank">Download [1080p]</a>
                </div>
            </div>

            <div class="movie-card">
                <img src="https://via.placeholder.com/300x450" alt="Movie Poster" class="movie-poster">
                <div class="movie-info">
                    <div class="movie-title">Movie Title 3 (2025)</div>
                    <a href="#" class="download-btn" target="_blank">Download [720p]</a>
                </div>
            </div>

        </div>
    </div>

    <footer>
        <p>© 2026 Movie Hub | Created with GitHub Pages</p>
    </footer>

</body>
</html>
