# File Upload API

This is a simple Express.js application that allows users to upload a file and receive its metadata (name, type, and size) in the response. The file is not saved permanently on the server, only processed temporarily for analysis.

## Features

- **Upload a file** via a `POST` request.
- **Analyze the file** to extract:
  - File name
  - File type (MIME type)
  - File size (in bytes)
- **No file saving**: The file is stored in memory temporarily and not saved to disk.

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

### Step 1: Clone the repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/azwdevops/freecodecamp-file-analyzer.git
cd freecodecamp-file-analyzer
```

### Step 2: Install dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### Step 3: Start the server

Start the application by running the following command:

```bash
npm start
```

The server will be running at `http://localhost:3000`.

## API Endpoints

### `POST /api/fileanalyse`

Upload a file and receive metadata about it.

#### Request

- **Content-Type**: `multipart/form-data`
- **Form Data**:
  - `upfile`: The file to be uploaded

#### Example Request (using `curl`):

```bash
curl -X POST http://localhost:3000//api/fileanalyse \
  -F "upfile=@path/to/your/file.jpg"
```

#### Example Request (using Postman):

- Set the **method** to `POST`.
- Set the **URL** to `http://localhost:3000/api/fileanalyse`.
- In the **Body** tab, select **form-data**.
- Add a key called `upfile` and select a file to upload.

#### Response

If the file is successfully uploaded, you will receive a JSON response with the file's metadata:

```json
{
  "fileName": "example.jpg",
  "fileType": "image/jpeg",
  "fileSize": 102400
}
```

- **fileName**: The original name of the file.
- **fileType**: The MIME type of the file (e.g., `image/jpeg`).
- **fileSize**: The size of the file in bytes.

If no file is uploaded, you will receive the following error response:

```json
{
  "error": "No file uploaded"
}
```

## Testing the Application

To test the file upload functionality, you can use **Postman** or **curl**:

### Postman:

1. Set the **method** to `POST`.
2. Set the **URL** to `http://localhost:3000/api/fileanalyse`.
3. In the **Body** tab, select **form-data**.
4. Add a key called `upfile` and select a file to upload.
5. Click **Send** to receive the file metadata in the response.

### Curl:

Use the following command in your terminal to test the file upload:

```bash
curl -X POST http://localhost:3000/api/fileanalyse -F "upfile=@path/to/your/file.jpg"
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Express.js](https://expressjs.com/) for the lightweight and fast web framework.
- [Multer](https://www.npmjs.com/package/multer) for handling file uploads.

---
