<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HDHub4U Clone - Download Latest HD Movies</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Roboto', sans-serif;
        }

        body {
            background-color: #0b0c10;
            color: #c5c6c7;
        }

        /* Top Bar Like HDHub4u */
        .top-navbar {
            background-color: #1f2833;
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 3px solid #f5b041;
            flex-wrap: wrap;
            gap: 15px;
        }

        .logo {
            color: #f5b041;
            font-size: 1.8rem;
            font-weight: bold;
            text-transform: uppercase;
            text-decoration: none;
        }

        .logo span {
            color: #ffffff;
        }

        /* Search Box */
        .search-container {
            flex: 1;
            max-width: 500px;
            position: relative;
        }

        .search-box {
            width: 100%;
            padding: 10px 20px;
            border-radius: 25px;
            border: 2px solid #45f3ff;
            background-color: #0b0c10;
            color: white;
            font-size: 0.95rem;
            outline: none;
        }

        /* Category Nav */
        .category-bar {
            background-color: #151a21;
            padding: 10px;
            text-align: center;
            overflow-x: auto;
            white-space: nowrap;
        }

        .cat-btn {
            background: none;
            border: none;
            color: #c5c6c7;
            padding: 8px 16px;
            margin: 0 5px;
            font-size: 0.95rem;
            font-weight: bold;
            cursor: pointer;
            border-radius: 4px;
            transition: 0.3s;
        }

        .cat-btn.active, .cat-btn:hover {
            background-color: #f5b041;
            color: #0b0c10;
        }

        /* Main Container */
        .main-container {
            max-width: 1300px;
            margin: 30px auto;
            padding: 0 15px;
        }

        .section-title {
            border-left: 4px solid #f5b041;
            padding-left: 10px;
            margin-bottom: 20px;
            color: #ffffff;
            font-size: 1.4rem;
        }

        /* Movie Grid */
        .movie-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
            gap: 20px;
        }

        /* HDHub4u Styled Card */
        .movie-card {
            background-color: #1f2833;
            border-radius: 5px;
            overflow: hidden;
            border: 1px solid #2c3540;
            transition: all 0.3s ease;
            position: relative;
        }

        .movie-card:hover {
            border-color: #f5b041;
            transform: translateY(-5px);
        }

        .poster-box {
            position: relative;
            width: 100%;
            height: 270px;
            background-color: #151a21;
        }

        .movie-poster {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .quality-tag {
            position: absolute;
            top: 8px;
            right: 8px;
            background-color: #27ae60;
            color: white;
            padding: 2px 6px;
            font-size: 0.75rem;
            font-weight: bold;
            border-radius: 3px;
        }

        .lang-tag {
            position: absolute;
            bottom: 5px;
            left: 5px;
            background-color: rgba(0, 0, 0, 0.8);
            color: #f5b041;
            padding: 2px 6px;
            font-size: 0.75rem;
            border-radius: 3px;
            font-weight: 500;
        }

        .movie-details {
            padding: 10px;
        }

        .movie-name {
            font-size: 0.9rem;
            font-weight: bold;
            color: #ffffff;
            line-height: 1.3rem;
            height: 2.6rem;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            margin-bottom: 10px;
        }

        .download-link {
            display: block;
            background-color: #f5b041;
            color: #0b0c10;
            text
