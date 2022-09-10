const dataAntibiotik = [
    "Aldesulfone sodium",
    "Amikacin",
    "Aminosalicylate",
    "Amoxicillin",
    "Amoxicillin-Clavulanic-acid",
    "Ampicillin",
    "Ampicillin-sulbactam",
    "Apramycin",
    "Arbekacin",
    "Astromicin",
    "Avoparcin",
    "Azidocillin",
    "Azithromycin",
    "Azlocillin",
    "Aztreonam",
    "Bacampicillin",
    "Bacitracin",
    "Bedaquiline",
    "Bekanamycin",
    "Benethamine-Benzylpenicillin",
    "Benzathine-Benzylpenicillin",
    "Benzylpenicillin/Penicillin G",
    "Besifloxacin",
    "Biapenem",
    "Brodimoprim",
    "Cadazolid",
    "Calcium",
    "Capreomycin",
    "Carbenicillin",
    "Carindacillin",
    "Carumonam",
    "Cefacetrile",
    "Cefaclor",
    "Cefadroxil",
    "Cefalexin",
    "Cefalonium",
    "Cefaloridine",
    "Cefalotin",
    "Cefalotin",
    "Cefamandole",
    "Cefapirin",
    "Cefatrizine",
    "Cefazedone",
    "Cefazolin",
    "Cefbuperazone",
    "Cefcapene",
    "Cefdinir",
    "Cefditoren",
    "Cefepime",
    "Cefetamet",
    "Cefixime",
    "Cefmenoxime",
    "Cefmetazole",
    "Cefminox",
    "Cefodizime",
    "Cefonicid",
    "Cefoperazone",
    "Cefoperazone-sulbactam",
    "Ceforanide",
    "Cefoselis",
    "Cefotaxime",
    "Cefotetan",
    "Cefotiam",
    "Cefovecin",
    "Cefoxitin",
    "Cefozopran",
    "Cefpiramide",
    "Cefpirome",
    "Cefpodoxime",
    "Cefprozil",
    "Cefquinome",
    "Cefradine",
    "Cefroxadine",
    "Cefsulodin",
    "Ceftaroline",
    "Ceftazidime",
    "Ceftazidime-avibactam",
    "Ceftezole",
    "Ceftibuten",
    "Ceftiofur",
    "Ceftizoxime",
    "Ceftobiprole",
    "Ceftolozane",
    "Ceftriaxone",
    "Ceftriaxone-sulbactam",
    "Cefuroxime",
    "Cethromycin",
    "Chloramphenicol",
    "Chlortetracycline",
    "Cinoxacin",
    "Ciprofloxacin",
    "Clarithromycin",
    "Clindamycin",
    "Clofazimine",
    "Clometocillin",
    "Clomocycline",
    "Cloxacillin",
    "Colistin",
    "Cycloserine",
    "Dalbavancin",
    "Danofloxacin",
    "Dapsone",
    "Daptomycin",
    "Delafloxacin",
    "Delamanid",
    "Demeclocycline",
    "Dibekacin",
    "Dicloxacillin",
    "Difloxacin",
    "Dihydrostreptomycin",
    "Dirithromycin",
    "Doripenem",
    "Doxycycline",
    "Enoxacin",
    "Enrofloxacin",
    "Epicillin",
    "Eravacycline",
    "Ertapenem",
    "Erythromycin",
    "Ethambutol",
    "Ethionamide",
    "Faropenem",
    "Fidaxomicin",
    "Fleroxacin",
    "Flomoxef",
    "Florfenicol",
    "Flucloxacillin",
    "Flumequine",
    "Flurithromycin",
    "Formosulfathiazole",
    "Fosamil",
    "Fosfomycin",
    "Framycetin",
    "Furaltadone",
    "Furazidin",
    "Furazolidone",
    "Fusidic Acid",
    "Gamithromycin",
    "Gatifloxacin",
    "Gemifloxacin",
    "Gentamicin",
    "Grepafloxacin",
    "Hetacillin",
    "Hydriodide",
    "Ibafloxacin",
    "Iclaprim",
    "Imipenem",
    "Isepamicin",
    "Isoniazid",
    "Josamycin",
    "Kanamycin",
    "Kitasamycin",
    "Latamoxef",
    "Levofloxacin",
    "Lincomycin",
    "Linezolid",
    "Lomefloxacin",
    "Loracarbef",
    "Lymecycline",
    "Marbofloxacin",
    "Mecillinam",
    "Meropenem",
    "Meropenem/Vaborbactam",
    "Metacycline",
    "Metampicillin",
    "Methicillin",
    "Metronidazole",
    "Mezlocillin",
    "Midecamycin",
    "Minocycline",
    "Miocamycin",
    "Morinamide",
    "Moxifloxacin",
    "Mupirocin",
    "Nadifloxacin",
    "Nafcillin",
    "Nalidixic acid",
    "Neomycin",
    "Netilmicin",
    "Nifurtoinol",
    "Nitrofural",
    "Nitrofurantoin",
    "Norfloxacin",
    "Ofloxacin",
    "Oleandomycin",
    "Omadacycline",
    "Orbifloxacin",
    "Oritavancin",
    "Ornidazole",
    "Oxacillin",
    "Oxolinic acid",
    "Oxytetracycline",
    "Ozenoxacin",
    "Panipenem",
    "Para-aminosalicylic-acid",
    "Paromomycin",
    "Pazufloxacin",
    "Pefloxacin",
    "Penamecillin",
    "Penethamate",
    "Penimepicycline",
    "Pheneticillin",
    "Phenoxymethylpenicillin/Penicillin V",
    "Phthalylsulfathiazole",
    "Pipemidic acid",
    "Piperacillin",
    "Piperacillin-Tazobactam",
    "Pirlimycin",
    "Piromidic acid",
    "Pivampicillin",
    "Pivmecillinam",
    "Plazomicin",
    "Polymyxin B",
    "Pradofloxacin",
    "Pristinamycin",
    "Procaine Benzylpenicillin",
    "Propicillin",
    "Protionamide",
    "Prulifloxacin",
    "Pyrazinamide",
    "Pyrimethamine",
    "Quinupristin-dalfopristin",
    "Radezolid",
    "Ramoplanin",
    "Retapamulin",
    "Ribostamycin",
    "Rifabutin",
    "Rifampicin",
    "Rifamycin",
    "Rifapentine",
    "Rifaximin",
    "Rokitamycin",
    "Rolitetracycline",
    "Rosoxacin",
    "Roxithromycin",
    "Rufloxacin",
    "Secnidazole",
    "Sitafloxacin",
    "Sodium aminosalicylate",
    "Solithromycin",
    "Sparfloxacin",
    "Spectinomycin",
    "Spiramycin",
    "Streptomycin",
    "Sulbenicillin",
    "Sulfadiazine",
    "Sulfadimethoxine",
    "Sulfadimidine",
    "Sulfafurazole/Sulfisoxazole",
    "Sulfaisodimidine",
    "Sulfalene",
    "Sulfamazone",
    "Sulfamerazine",
    "Sulfamethizole",
    "Sulfamethoxazole",
    "Sulfamethoxypyridazine",
    "Sulfametomidine",
    "Sulfametoxydiazine",
    "Sulfametrole",
    "Sulfamoxole",
    "Sulfanilamide",
    "Sulfaperin",
    "Sulfaphenazole",
    "Sulfapyridine",
    "Sulfathiazole",
    "Sulfathiourea",
    "Sultamicillin",
    "Talampicillin",
    "Tazobactam",
    "Tedizolid",
    "Teicoplanin",
    "Telavancin",
    "Telithromycin",
    "Temafloxacin",
    "Temocillin",
    "Terizidone",
    "Tetracycline",
    "Tetroxoprim",
    "Thiamphenicol",
    "Tiamulin",
    "Ticarcillin",
    "Ticarcillin-Clavulanic-acid",
    "Tigecycline",
    "Tildipirosin",
    "Tilmicosin",
    "Tinidazole",
    "Tiocarlide",
    "Tobramycin",
    "Trimethoprim",
    "Troleandomycin",
    "Tulathromycin",
    "Tylosin",
    "Tylvalosin",
    "Valnemulin",
    "Vancomycin",
    "Virginiamycin"
];

module.exports = dataAntibiotik;