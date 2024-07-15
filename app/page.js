
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const onButtonClickMP3 = async () => {
    if(!URL){
      message.warning("URL Field can't be empty!")
    }
    else{
      endpoint = '/api/mp3downloader';
      setToggle(true);
      const result = await fetcher(endpoint)
      console.log(result)
      if (result) {
        console.log('I CAME HERE', toggle);
  
        window.location.href = result
      }
      if (error) console.log(error)
      if (!data) console.log('Loading MP3')
      setToggle(false);
    }
  }
  return (
   <main className="mt-16">
    <header className="py-5">
      <h2 className="text-center">App to find and download songs from Youtube</h2>
    </header>
    <SearchBar/>

   </main>
  );
}
