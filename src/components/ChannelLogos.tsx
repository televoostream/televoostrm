import { Card, CardContent } from "@/components/ui/card";

const ChannelLogos = () => {
  const channelRows = [
    [
      { name: "ESPN", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/ESPN_wordmark.svg" },
      { name: "HBO", logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/HBO_logo.svg" },
      { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
      { name: "ABC", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/ABC-2021-LOGO.svg" },
      { name: "NBC", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/NBC_logo.svg" },
      { name: "CNN", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/CNN.svg" },
    ],
    [
      { name: "USA Network", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/USA_Network_logo_%282016%29.svg" },
      { name: "Showtime", logo: "https://upload.wikimedia.org/wikipedia/commons/2/22/Showtime.svg" },
      { name: "Bravo", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Bravo_2017_logo.svg" },
      { name: "Peacock", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/NBCUniversal_Peacock_Logo.svg" },
      { name: "UFC", logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/UFC_Logo.svg" },
      { name: "AMC", logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/AMC_logo_2019.svg" },
    ],
    [
      { name: "TNT", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/TNT_Logo_2016.svg" },
      { name: "FX", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/FX_International_logo.svg" },
      { name: "National Geographic", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Natgeologo.svg" },
      { name: "History", logo: "https://upload.wikimedia.org/wikipedia/commons/0/01/History_%282021%29.svg" },
      { name: "BBC", logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/BBC_Logo_2021.svg" },
      { name: "TBS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/TBS_logo_2016.svg" },
    ],
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Premium{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Network Partners
            </span>
          </h2>
          <p className="text-muted-foreground">
            Access content from the world's leading entertainment networks
          </p>
        </div>

        <div className="space-y-8 overflow-hidden">
          {channelRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex gap-6 animate-scroll"
              style={{
                animation: rowIndex % 2 === 0 
                  ? 'scroll-left 20s linear infinite' 
                  : 'scroll-right 20s linear infinite'
              }}
            >
              {/* Duplicate items for seamless loop */}
              {[...row, ...row].map((brand, index) => (
                <Card
                  key={index}
                  className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-neon-green hover:-translate-y-1 flex-shrink-0 w-[200px]"
                >
                  <CardContent className="p-6 flex items-center justify-center h-20">
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      className="max-h-12 max-w-full object-contain filter brightness-0 invert dark:brightness-100 dark:invert-0"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </div>
        
        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}</style>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            + Thousands more channels from around the world
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChannelLogos;
