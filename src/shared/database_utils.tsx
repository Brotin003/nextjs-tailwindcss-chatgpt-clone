import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://mphrlomrfzelffqrihvu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1waHJsb21yZnplbGZmcXJpaHZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjczNzIyNjIsImV4cCI6MjA0Mjk0ODI2Mn0.NcOB8dM3AJhsMG-3z8moOX83YapY3Wr7jw4VEdOQwmk')

const table_name = "brotin_maggi"

async function fetchData(){
    const { data, error } = await supabase.from(table_name).select('*')

    if (error) {
        console.error(error)
        return
    }

    console.log(data)

    return data
}

fetchData()

export default fetchData;
