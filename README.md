# mycv

基于[BartoszJarocki/cv](https://github.com/BartoszJarocki/cv)项目修改而来，加入中英文支持，更适合中文环境的简单Web简历。

## Getting Started Locally

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/DingWH03/mycv.git
   ```

2. Move to the cloned directory

   ```bash
   cd cv
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

4. Start the local Server:

   ```bash
   yarn dev
   ```

5. Open the [Config file](./src/data/resume-data.tsx) and make changes

## Run with Docker

Build the container

```bash
docker compose build
```

Run the container

```bash
docker compose up -d
```

Stop the Container

```bash
docker compose down 
```
