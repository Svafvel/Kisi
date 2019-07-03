function pilihanNIM(){

            var NIM = document.Form.NIM;
            var NamaMhs = document.Form.NamaMahasiswa;

            if (NIM.value == '180441020111'){

                NamaMhs.value = 'Fikri Wahyudi';

            }else if(NIM.value == '180441020112'){

                NamaMhs.value = 'Adam Zailani';

            }else if(NIM.value == '180441020113'){

                NamaMhs.value = 'Andhika Tri Handoyo';

            }else if(NIM.value == '180441020114'){
                
                NamaMhs.value = 'Muhammad Yusuf';

            }else if(NIM.value == '180441020115'){

                NamaMhs.value = 'Gilang Saputra';

            }else if(NIM.value == '180441020116'){

                NamaMhs.value = 'Herdiansyah';

            }else if(NIM.value == '180441020117'){

                NamaMhs.value = 'Suhu Andika Kurniawan';

            }

        }

        function Proses(){

            var NIM = document.Form.NIM;
            var NamaMhs = document.Form.NamaMahasiswa;
            var Kelas = document.Form.Kelas;
            var MataKuliah = document.Form.MataKuliah;
            var Tugas = document.Form.Tugas;
            var Formatif = document.Form.Formatif;
            var UTS = document.Form.UTS;
            var UAS = document.Form.UAS;
            var TotalNilai = document.Form.TotalNilai;

            var ONIM = document.Form.ONIM;
            var ONamaMhs = document.Form.ONamaMahasiswa;
            var OKelas = document.Form.OKelas;
            var OMataKuliah = document.Form.OMataKuliah;
            var NilaiAkhir = document.Form.NilaiAkhir;
            var Grade = document.Form.Grade;

            var Data = {'NIM' : NIM, 'Nama Mahasiswa' : NamaMhs, 'Kelas' : Kelas, 'Mata Kuliah' : MataKuliah, 'Tugas' : Tugas, 'Formatif' : Formatif, 'UTS' : UTS, 'UAS' : UAS};

            var DataString = ['NIM','Nama Mahasiswa', 'Kelas', 'Mata Kuliah', 'Tugas','Formatif','UTS','UAS'];

            var DataBlmIsi = "";
            for (var i = 0 ; i < DataString.length; i++){

                if (Data[DataString[i]].value == ""){

                    DataBlmIsi = DataBlmIsi + " " + DataString[i];

                }

            }



            if (DataBlmIsi != ""){

                alert('Silakan Isi Data Anda ' + DataBlmIsi);

            }else {

                TotalNilai.value = (Tugas.value*0.3)+(Formatif.value*0.1)+(UTS.value*0.25)+(UAS.value*0.35);

                ONIM.value = NIM.value;
                ONamaMhs.value = NamaMhs.value;
                OKelas.value = Kelas.value;
                OMataKuliah.value = MataKuliah.value;
                NilaiAkhir.value = TotalNilai.value;


                if (TotalNilai.value >= 90 ){

                    Grade.value = 'A';

                }else if (TotalNilai.value >= 85){

                    Grade.value = 'A-';

                }else if (TotalNilai.value >= 80){

                    Grade.value = 'B+';

                }else if (TotalNilai.value >= 75){

                    Grade.value = 'B';

                }else if (TotalNilai.value >= 70){

                    Grade.value = 'B-';

                }else if (TotalNilai.value >= 65){

                    Grade.value = 'C+';

                }else if (TotalNilai.value >= 60){

                    Grade.value = 'C';

                }else if (TotalNilai.value >= 55){

                    Grade.value = 'C-';

                }else if (TotalNilai.value >= 50){

                    Grade.value = 'D';

                }else if (TotalNilai.value < 50){

                    Grade.value = 'E';

                }

            }


        }
