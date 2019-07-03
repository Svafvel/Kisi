function Proses(){
            
            var NIM = document.formLeft.NIM;
            var NamaMahasiswa = document.formLeft.NamaMahasiswa;
            var Jurusan = document.formLeft.PilihJurusan;
            var Laki = document.formLeft.LakiLaki;
            var Perempuan = document.formLeft.Perempuan;
            var TempatLahir = document.formLeft.TempatLahir;
            var Hari = document.formLeft.PilihDate;
            var Bulan = document.formLeft.PilihMonth;
            var Tahun = document.formLeft.PilihYear;
            var Alamat = document.formLeft.Alamat;
            var NoTelp = document.formLeft.NoTelp;
            var Email = document.formLeft.Email;
            var ONIM = document.formRight.ONIM;
            var ONamaMahasiswa = document.formRight.ONamaMahasiswa;
            var OJurusan= document.formRight.OJurusan;
            var OJenisKelamin = document.formRight.OJenisKelamin;
            var OTempatLahir = document.formRight.OTempatLahir;
            var OTanggal = document.formRight.OTanggalLahir;
            var OAlamat = document.formRight.OAlamat;
            var ONoTelp = document.formRight.ONoTelp;
            var OEmail = document.formRight.OEmail;
            var Data = {'NIM' : NIM, 'Nama Mahasiswa' : NamaMahasiswa, 'Jurusan' : Jurusan, 'Jenis Kelamin' : [Laki, Perempuan], 'Tempat Lahir' : TempatLahir,'Tanggal Lahir' : [Hari,Bulan,Tahun], 'Alamat' : Alamat, 'No Telpon': NoTelp, 'Email' : Email};
            var DataString = ['NIM','Nama Mahasiswa','Jurusan','Jenis Kelamin','Tempat Lahir','Tanggal Lahir','Alamat','No Telpon','Email'];
            var Keluaran = "";
            var JenisKelamin = "";
            for (var i = 0; i < DataString.length; i++){
                if (i < 3){
                    if (Data[DataString[i]].value == ""){
                        Keluaran = Keluaran + " " + DataString[i];
                    }
                }else if (i == 3){
                    if (Data[DataString[3]][0].checked == false){
                        if (Data[DataString[3]][1].checked == false){
                            Keluaran = Keluaran + " " + DataString[i];
                        }else {
                            JenisKelamin = 'Perempuan';
                        }
                    }else {
                        JenisKelamin = 'Laki - Laki';
                    }
                }else if (i == 4){
                    if (Data[DataString[4]].value == ""){
                        Keluaran = Keluaran + " " + DataString[i];
                    }
                }else if ( i == 5){
                    if (Data[DataString[5]][0].value == ""){
                        if (Data[DataString[5]][1].value == ""){
                            if (Data[DataString[5]][2].value == ""){
                                Keluaran = Keluaran + " " + DataString[i];
                            }else if(Data[DataString[5]][0].value == "" && Data[DataString[5]][1].value == ""){
                                
                                Keluaran = Keluaran + " Hari dan Bulan Lahir";
                                
                            }else if (Data[DataString[5]][0].value == "" ){
                             
                                Keluaran = Keluaran + " Hari Lahir";
                                
                            }else if(Data[DataString[5]][1].value == ""){
                                
                                Keluaran = Keluaran = " Bulan Lahir";
                                
                            }
                        }else if (Data[DataString[5]][0].value == "" && Data[DataString[5]][2].value == ""){
                         
                            Keluaran = Keluaran + " Hari dan Tahun Lahir";
                            
                        }else if (Data[DataString[5]][0].value == ""){
                            
                            Keluaran = Keluaran + " Hari Lahir";
                            
                        }else if (Data[DataString[5]][2].value == ""){
                         
                            Keluaran = Keluaran + " Tahun Lahir";
                            
                        }
                    }else {
                        
                        if (Data[DataString[5]][1].value == "" && Data[DataString[5]][2].value == ""){
                            
                            Keluaran = Keluaran + " Bulan dan Tahun Lahir"
                            
                        }else if (Data[DataString[5]][1].value == ""){
                              
                             Keluaran = Keluaran + " Bulan Lahir";
                        }else if (Data[DataString[5]][2].value == ""){
                            
                              Keluaran = Keluaran + " Tahun Lahir";
                                  
                        }
                        
                    }
                }else if ( i == 6 ){
                    if (Data[DataString[i]].value == ""){
                        Keluaran = Keluaran + " " + DataString[i];
                    }
                }else if ( i == 7 ){
                    if (Data[DataString[i]].value  == ""){
                        Keluaran = Keluaran + " " + DataString[i];
                    }
                }else if ( i == 8 ){
                    if (Data[DataString[i]].value == ""){
                        Keluaran = Keluaran + " " + DataString[i];
                    }
                }
            }
            if (Keluaran != ""){
                alert('Silakan Lengkapi Data ' + Keluaran);
            }else {
             
                ONIM.value = NIM.value;
                ONamaMahasiswa.value = NamaMahasiswa.value;
                OJurusan.value = Jurusan.value;
                OJenisKelamin.value = JenisKelamin;
                OTempatLahir.value = TempatLahir.value;
                OTanggal.value = Hari.value + " " + Bulan.value + " " + Tahun.value;
                OAlamat.value = Alamat.value;
                ONoTelp.value = NoTelp.value;
                OEmail.value = Email.value;  
                
            }
        
            
        }
        
        function hapus(){
            
            var ONIM = document.formRight.ONIM;
            var ONamaMahasiswa = document.formRight.ONamaMahasiswa;
            var OJurusan= document.formRight.OJurusan;
            var OJenisKelamin = document.formRight.OJenisKelamin;
            var OTempatLahir = document.formRight.OTempatLahir;
            var OTanggal = document.formRight.OTanggalLahir;
            var OAlamat = document.formRight.OAlamat;
            var ONoTelp = document.formRight.ONoTelp;
            var OEmail = document.formRight.OEmail;
            
            ONIM.value = "";
            ONamaMahasiswa.value = "";
            OJurusan.value = "";
            OJenisKelamin.value = "";
            OTempatLahir.value = "";
            OTanggal.value = "";
            OAlamat.value = "";
            ONoTelp.value = "";
            OEmail.value = "";  
        }