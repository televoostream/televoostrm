import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Film, TvMinimal, Baby, Newspaper, Crown, Music, Gamepad2, BookOpen, Globe } from "lucide-react";

const Channels = () => {
  const channelCategories = [
    {
      id: "sports",
      name: "Sports",
      icon: Trophy,
      description: "Live sports, replays, and exclusive PPV events",
      channels: [
        { name: "ESPN", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/ESPN_wordmark.svg" },
        { name: "ESPN2", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/ESPN2_logo.svg" },
        { name: "CBS Sports", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9c/CBS_Sports_logo_%282020%29.svg" },
        { name: "NBC Sports", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/NBC_Sports_2012.svg" },
        { name: "Eurosport", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Eurosport_Logo_2015.svg" },
        { name: "TSN", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/TSN_%282021%29.svg" },
        { name: "DAZN", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c4/DAZN_logo.svg" },
        { name: "NFL Network", logo: "https://upload.wikimedia.org/wikipedia/en/6/6d/NFL_Network_logo.svg" },
        { name: "NBA TV", logo: "https://upload.wikimedia.org/wikipedia/commons/5/54/NBA_TV.svg" },
        { name: "MLB Network", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/MLB_Network_Logo.svg" },
        { name: "NHL Network", logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/NHL_Network_logo.svg" },
        { name: "Golf Channel", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Golf_Channel_logo.svg" },
        { name: "Tennis Channel", logo: "https://upload.wikimedia.org/wikipedia/commons/8/86/Tennis_Channel_logo.svg" },
        { name: "UFC", logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/UFC_Logo.svg" },
      ],
    },
    {
      id: "movies",
      name: "Movies",
      icon: Film,
      description: "Blockbusters, classics, and exclusive premieres",
      channels: [
        { name: "HBO", logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/HBO_logo.svg" },
        { name: "HBO Max", logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg" },
        { name: "Cinemax", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Cinemax_logo.svg" },
        { name: "Showtime", logo: "https://upload.wikimedia.org/wikipedia/commons/2/22/Showtime.svg" },
        { name: "Starz", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Starz_2016.svg" },
        { name: "MGM+", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/MGM%2B_logo.svg" },
        { name: "Epix", logo: "https://upload.wikimedia.org/wikipedia/commons/5/52/Epix_logo.svg" },
        { name: "IFC", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/IFC_logo_%282010-2014%29.svg" },
        { name: "Sundance", logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/SundanceTV_logo.svg" },
        { name: "TCM", logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Turner_Classic_Movies_%28TCM%2C_US%29_logo.svg" },
      ],
    },
    {
      id: "entertainment",
      name: "Entertainment",
      icon: TvMinimal,
      description: "Drama, comedy, reality, and lifestyle shows",
      channels: [
        { name: "AMC", logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/AMC_logo_2019.svg" },
        { name: "FX", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/FX_International_logo.svg" },
        { name: "USA Network", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/USA_Network_logo_%282016%29.svg" },
        { name: "TNT", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/TNT_Logo_2016.svg" },
        { name: "TBS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/TBS_logo_2016.svg" },
        { name: "Comedy Central", logo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Comedy_Central_2018.svg" },
        { name: "Bravo", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Bravo_2017_logo.svg" },
        { name: "Lifetime", logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/Lifetime_logo_2020.svg" },
        { name: "A&E", logo: "https://upload.wikimedia.org/wikipedia/commons/d/df/A%26E_Network_logo.svg" },
        { name: "History", logo: "https://upload.wikimedia.org/wikipedia/commons/0/01/History_%282021%29.svg" },
        { name: "Syfy", logo: "https://upload.wikimedia.org/wikipedia/commons/b/be/SYFY.svg" },
        { name: "TLC", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/TLC_Logo.svg" },
        { name: "HGTV", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/HGTV_US_Logo_2015.svg" },
        { name: "Food Network", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Food_Network_logo.svg" },
      ],
    },
    {
      id: "kids",
      name: "Kids & Family",
      icon: Baby,
      description: "Safe, age-appropriate content for children",
      channels: [
        { name: "Nickelodeon", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Nickelodeon_2009_logo.svg" },
        { name: "Nick Jr", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Nick_Jr._logo_2009.svg" },
        { name: "Cartoon Network", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fe/CARTOON_NETWORK_logo.svg" },
        { name: "Boomerang", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Boomerang_2014_logo.svg" },
        { name: "PBS Kids", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/PBS_Kids_Logo.svg" },
      ],
    },
    {
      id: "news",
      name: "News",
      icon: Newspaper,
      description: "Local, national, and international news coverage",
      channels: [
        { name: "CNN", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/CNN.svg" },
        { name: "Fox News", logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Fox_News_Channel_logo.svg" },
        { name: "MSNBC", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/MSNBC_2021.svg" },
        { name: "BBC News", logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/BBC_News_2019.svg" },
        { name: "Sky News", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Sky_News_logo_2023.svg" },
        { name: "CNBC", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/CNBC_logo.svg" },
        { name: "Bloomberg", logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Bloomberg_Television_logo.svg" },
        { name: "Al Jazeera", logo: "https://upload.wikimedia.org/wikipedia/en/7/71/Aljazeera.svg" },
      ],
    },
    {
      id: "premium",
      name: "Premium / PPV",
      icon: Crown,
      description: "Exclusive live events and pay-per-view content",
      channels: [
        { name: "UFC", logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/UFC_Logo.svg" },
        { name: "WWE", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/WWE_Network_logo.svg" },
        { name: "Showtime PPV", logo: "https://upload.wikimedia.org/wikipedia/commons/2/22/Showtime.svg" },
        { name: "HBO PPV", logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/HBO_logo.svg" },
      ],
    },
    {
      id: "music",
      name: "Music",
      icon: Music,
      description: "Music videos, concerts, and music channels",
      channels: [
        { name: "MTV", logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/MTV_2021_%28brand_version%29.svg" },
        { name: "VH1", logo: "https://upload.wikimedia.org/wikipedia/commons/9/94/VH1_logonew.svg" },
        { name: "CMT", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/CMT_2017_logo.svg" },
        { name: "BET", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/BET_logo_2021.svg" },
        { name: "Fuse", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Fuse_2015_logo.svg" },
      ],
    },
    {
      id: "international",
      name: "International",
      icon: Globe,
      description: "Content from around the world",
      channels: [
        { name: "BBC", logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/BBC_Logo_2021.svg" },
        { name: "France 24", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/France24.svg" },
        { name: "Al Jazeera", logo: "https://upload.wikimedia.org/wikipedia/en/7/71/Aljazeera.svg" },
        { name: "DW", logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Deutsche_Welle_symbol_2012.svg" },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-display font-bold">
            Channel{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Lineup
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore thousands of premium channels across all categories. From live sports to blockbuster movies, we've got you covered.
          </p>
        </div>

        {/* Channels Tabs */}
        <Tabs defaultValue="sports" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mb-12 bg-card/50 p-2 gap-2 h-auto">
            {channelCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground flex-col h-auto py-3 gap-2"
              >
                <category.icon className="w-5 h-5" />
                <span className="text-xs">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {channelCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="animate-fade-in space-y-8">
              {/* Category Info */}
              <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-border/50">
                <CardContent className="p-8 flex items-center gap-6">
                  <div className="p-4 bg-accent/10 rounded-xl">
                    <category.icon className="w-12 h-12 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-display font-bold mb-2">{category.name}</h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Channel Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {category.channels.map((channel, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-neon-purple hover:-translate-y-1 transition-all duration-300 cursor-pointer border-border/50 hover:border-accent/50"
                  >
                    <CardContent className="p-6 flex items-center justify-center h-28">
                      <img 
                        src={channel.logo} 
                        alt={channel.name} 
                        className="max-h-16 max-w-full object-contain filter brightness-0 invert dark:brightness-100 dark:invert-0 group-hover:scale-110 transition-transform"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <Card className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-neon-green">
            <CardContent className="p-8 text-center space-y-2">
              <p className="text-5xl font-display font-bold text-accent">5,000+</p>
              <p className="text-muted-foreground">Live Channels</p>
            </CardContent>
          </Card>
          <Card className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-neon-green">
            <CardContent className="p-8 text-center space-y-2">
              <p className="text-5xl font-display font-bold text-accent">10,000+</p>
              <p className="text-muted-foreground">Movies & Shows</p>
            </CardContent>
          </Card>
          <Card className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-neon-green">
            <CardContent className="p-8 text-center space-y-2">
              <p className="text-5xl font-display font-bold text-accent">24/7</p>
              <p className="text-muted-foreground">Live Support</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Channels;
