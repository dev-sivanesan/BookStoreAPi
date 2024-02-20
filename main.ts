import express from 'express';
import sequelize from './src/db';
import bookRoutes from './routes/bookRoutes';

const app = express();

app.use(express.json());
app.use('/books', bookRoutes);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database synced');
        // Start server
        const PORT =  3000;
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    })
    .catch(error => console.error('Error syncing database:', error));
