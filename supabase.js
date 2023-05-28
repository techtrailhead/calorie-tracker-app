const { createClient } = require('@supabase/supabase-js');


// Set up Supabase client
const supabase = createClient('https://nbawpoodfsunkvrcjnmv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5iYXdwb29kZnN1bmt2cmNqbm12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUyNTk1ODgsImV4cCI6MjAwMDgzNTU4OH0.R5_BDnAiIcl0Lcza_YSwVkJhhdmwvBoHT4RGcABiS9I');

supabase
    .from('meals')
    .select('*')
    .then(({ data, error }) => {
        if (error) {
            console.log('Error connecting to Supabase:', error.message);
        } else {
            console.log('Successfully connected to Supabase');
            console.log('Retrieved data:', data);
        }
    })
    .catch((error) => {
        console.log('Error connecting to Supabase:', error.message);
    });

module.exports = {
    supabase,
};