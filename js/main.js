document.addEventListener('DOMContentLoaded', function() {
    // Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            navMenu.classList.remove('active');
        });
    });

    // Image Slider
    let slideIndex = 1;
    showSlides(slideIndex);

    function changeSlide(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");
        
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }

    // Auto advance slides
    setInterval(() => {
        changeSlide(1);
    }, 5000); // Change slide every 5 seconds

    // Publications loader
    loadPublications();
});

// Publications data
const publicationsData = {
    "sci_ssci_ahci_publications": [
      {
        "title": "Datum Alignment Between GNSS-IR Sea Level Estimations and Tide Gauges in Türkiye: A Vertical Local Tie Approach",
        "authors": ["Altuntaş C.", "Tunalıoğlu Öcalan N.", "Öcalan T."],
        "journal": "MARINE GEODESY AN INTERNATIONAL JOURNAL OF OCEAN SURVEYS, MAPPING AND SENSING",
        "volume": 48,
        "issue": 1,
        "pages": "2-20",
        "year": 2025,
        "index": "SCI-Expanded",
        "url": "https://www.tandfonline.com/doi/full/10.1080/01490419.2024.2402008"
      },
      {
        "title": "Source Geometry and Rupture Characteristics of the 20 February 2023 Mw 6.4 Hatay (Türkiye) Earthquake at Southwest Edge of the East Anatolian Fault",
        "authors": ["Yolsal Çevikbilen S.", "Taymaz T.", "Irmak T. S.", "Erman C.", "Kahraman M.", "Özkan B."],
        "journal": "GEOCHEMISTRY, GEOPHYSICS, GEOSYSTEMS",
        "volume": 25,
        "issue": 10,
        "pages": "1-29",
        "year": 2024,
        "index": "SCI-Expanded",
        "url": "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2023GC011353"
      },
      {
        "title": "Implementing robust outlier detection to enhance estimation accuracy of GNSS-IR based seasonal snow depth retrievals",
        "authors": ["Altuntaş C.", "Erdoğan B.", "Tunalıoğlu N."],
        "journal": "INTERNATIONAL JOURNAL OF REMOTE SENSING",
        "volume": 45,
        "issue": 11,
        "pages": "3648-3663",
        "year": 2024,
        "index": "SCI-Expanded",
        "url": "https://www.tandfonline.com/doi/full/10.1080/01431161.2024.2349265"
      },
      {
        "title": "A systematic approach for identifying optimal azimuth and elevation angle masks in GNSS-IR: validation through a sea level experiment",
        "authors": ["Altuntaş C.", "Tunalıoğlu N."],
        "journal": "GPS SOLUTIONS",
        "volume": 27,
        "pages": "1-13",
        "year": 2023,
        "index": "SCI-Expanded",
        "url": "https://link.springer.com/article/10.1007/s10291-023-01535-0"
      },
      {
        "title": "Enhancing snow depth estimations through iterative satellite elevation range selection in GNSS-IR to account for terrain variation",
        "authors": ["Altuntaş C.", "Tunalıoğlu N."],
        "journal": "IEEE TRANSACTIONS ON GEOSCIENCE AND REMOTE SENSING",
        "volume": 61,
        "pages": "1-9",
        "year": 2023,
        "index": "SCI-Expanded",
        "url": "https://ieeexplore.ieee.org/document/10243156"
      },
      {
        "title": "Machine learning-based snow depth retrieval using GNSS signal-to-noise ratio data",
        "authors": ["Altuntaş C.", "İban M. C.", "Şentürk E.", "Durdağ U. M.", "Tunalıoğlu N."],
        "journal": "GPS SOLUTIONS",
        "volume": 26,
        "pages": "1-12",
        "year": 2022,
        "index": "SCI-Expanded",
        "url": "https://link.springer.com/article/10.1007/s10291-022-01307-2"
      },
      {
        "title": "An experimental test for detecting effective reflector height with GPS SNR data",
        "authors": ["Tunalıoğlu N.", "Altuntaş C."],
        "journal": "EARTH SCIENCES RESEARCH JOURNAL",
        "volume": 26,
        "issue": 1,
        "pages": "13-22",
        "year": 2022,
        "index": "SCI-Expanded",
        "url": "https://revistas.unal.edu.co/index.php/esrj/article/view/87003"
      },
      {
        "title": "GIRAS: an open-source MATLAB-based software for GNSS-IR analysis",
        "authors": ["Altuntaş C.", "Tunalıoğlu N."],
        "journal": "GPS SOLUTIONS",
        "volume": 26,
        "issue": 1,
        "pages": "1-8",
        "year": 2022,
        "index": "SCI-Expanded",
        "url": "https://link.springer.com/article/10.1007/s10291-021-01201-3"
      },
      {
        "title": "Feasibility of retrieving effective reflector height using GNSS-IR from a single-frequency android smartphone SNR data",
        "authors": ["Altuntaş C.", "Tunalıoğlu N."],
        "journal": "Digital Signal Processing",
        "pages": "1-10",
        "year": 2021,
        "index": "SCI-Expanded",
        "url": "https://www.sciencedirect.com/science/article/pii/S1051200421000506?via%3Dihub"
      }
    ],
    "other_journal_publications": [
      {
        "title": "Assessment of GNSS-IR performance using multi-GNSS and multi-frequency SNR data from smartphones",
        "authors": ["Altuntaş C.", "Tunalıoğlu N."],
        "journal": "Jeodezi ve jeoinformasyon dergisi (Online)",
        "volume": 12,
        "issue": 1,
        "pages": "1-19",
        "year": 2025,
        "index_type": "Peer-Reviewed Journal",
        "url": "https://dergipark.org.tr/tr/pub/hkmojjd/issue/87388/1482350"
      },
      {
        "title": "Statistical Analysis of Covid-19 Outbreak with Benford's Law",
        "authors": ["Doğan A. H.", "Altuntaş C.", "Gül C.", "Tunalıoğlu N.", "Erdoğan B."],
        "journal": "Yönetim ve Ekonomi Araştırmaları Dergisi",
        "volume": 21,
        "issue": 2,
        "pages": "120-133",
        "year": 2023,
        "index_type": "Peer-Reviewed Journal",
        "url": "http://dx.doi.org/10.11611/yead.1078847"
      },
      {
        "title": "Rapid Characterization of the February 2023 Kahramanmaraş, Türkiye, Earthquake Sequence",
        "authors": ["Goldberg D. E.", "Taymaz T.", "Reitman N. G.", "Hatem A. E.", "Yolsal Çevikbilen S.", "Barnhart W. D.", "et al."],
        "journal": "The Seismic Record",
        "volume": 3,
        "issue": 2,
        "pages": "156-167",
        "year": 2023,
        "index_type": "Peer-Reviewed Journal",
        "url": "https://doi.org/10.1785/0320230009"
      },
      {
        "title": "Sub- and super-shear ruptures during the 2023 Mw 7.8 and Mw 7.6 earthquake doublet in SE Türkiye",
        "authors": ["Melgar D.", "Taymaz T.", "Ganas A.", "Crowell B.", "Öcalan T.", "Kahraman M.", "et al."],
        "journal": "Seismica",
        "volume": 2,
        "issue": 3,
        "pages": "1-10",
        "year": 2023,
        "index_type": "Peer-Reviewed Journal",
        "url": "https://doi.org/10.26443/seismica.v2i3.387"
      },
      {
        "title": "An investigation on the use of GNSS-IR method for determining sea level changes and its accuracy analysis",
        "authors": ["Altuntaş C.", "Tunalıoğlu N."],
        "journal": "GEOMATIK",
        "volume": 7,
        "issue": 3,
        "pages": "187-196",
        "year": 2022,
        "index_type": "ESCI",
        "url": "https://doi.org/10.29128/geomatik.946594"
      },
      {
        "title": "Yalın Bir Sanat Eleştirisi: Yapı(t)söküm",
        "authors": ["Altuntaş C."],
        "journal": "Telakki Sosyal Bilimler Dergisi",
        "volume": 1,
        "issue": 1,
        "pages": "61-62",
        "year": 2022,
        "index_type": "Peer-Reviewed Journal",
        "url": "https://dergipark.org.tr/tr/pub/telakkisbd/issue/76064/1259101"
      },
      {
        "title": "Retrieving the SNR metrics with different antenna configurations for GNSS-IR",
        "authors": ["Altuntaş C.", "Tunalıoğlu N."],
        "journal": "Turkish Journal of Engineering",
        "volume": 6,
        "issue": 1,
        "pages": "87-94",
        "year": 2022,
        "index_type": "Peer-Reviewed Journal",
        "url": "https://dergipark.org.tr/tr/pub/tuje/issue/60207"
      },
      {
        "title": "ESTIMATION PERFORMANCE OF SOIL MOISTURE WITH GPS-IR METHOD",
        "authors": ["Altuntaş C.", "Tunalıoğlu N."],
        "journal": "Sigma Journal of Engineering and Natural Sciences",
        "volume": 38,
        "issue": 4,
        "pages": "2217-2230",
        "year": 2020,
        "index_type": "ESCI",
        "url": "https://eds.yildiz.edu.tr/AjaxTool/GetArticleByPublishedArticleId?PublishedArticleId=5274"
      }
    ],
    "conference_publications": [
      {
        "title": "Investigating the potential of fire and smoke detection in video footage using YOLOv11 for early warning purposes",
        "authors": ["Altuntaş C.", "Arıcan D.", "Yılmaz O."],
        "conference": "XXIII. Türkiye Ulusal Jeodezi Komisyonu (TUJK) Sempozyumu 2024",
        "location": "Çanakkale, Turkey",
        "date": "6-09 November 2024",
        "pages": "1-2"
      },
      {
        "title": "Estimation of long-period, diurnal, and semidiurnal tidal constituents using GNSS-IR",
        "authors": ["Altuntaş C.", "Tunalıoğlu N."],
        "conference": "XXIII. Türkiye Ulusal Jeodezi Komisyonu (TUJK) Sempozyumu 2024",
        "location": "Çanakkale, Turkey",
        "date": "6-09 November 2024",
        "pages": "1-2"
      },
      {
        "title": "Investigation of the accuracy of the products obtained by unmanned aerial vehicle (UAV) photogrammetry using multi-GNSS PPP solutions",
        "authors": ["Türk T.", "Bahadur B.", "Öcalan T.", "Demirel Y.", "Altuntaş C."],
        "conference": "IX. Uzaktan Algılama ve Coğrafi Bilgi Sistemleri Sempozyumu",
        "location": "Aksaray, Turkey",
        "date": "17-19 October 2024",
        "pages": "1-4"
      },
      {
        "title": "Determination of sea level changes based on GNSS-IR on Türkiye coastlines",
        "authors": ["Altuntaş C.", "Tunalıoğlu N.", "Öcalan T.", "Keskin İ. H.", "Özel Ö.", "Sezen E.", "et al."],
        "conference": "Türkiye Ulusal Jeodezi Komisyonu (TUJK) XXII. Sempozyumu 2023",
        "location": "Trabzon, Turkey",
        "date": "29 November - 01 December 2023",
        "pages": "1-2"
      },
      {
        "title": "Assessment of the accuracy of point clouds obtained with a smartphone LiDAR sensor",
        "authors": ["Altuntaş C.", "Arıcan D.", "Yılmaz O."],
        "conference": "Türkiye Ulusal Jeodezi Komisyonu (TUJK) XXII. Sempozyumu 2023",
        "location": "Trabzon, Turkey",
        "date": "29 November - 01 December 2023",
        "pages": "1-2"
      },
      {
        "title": "Analysis of GNSS-IR-based sea level estimations using epoch-based and daily average approaches",
        "authors": ["Altuntaş C.", "Tunalıoğlu Öcalan N."],
        "conference": "19. Türkiye Harita Bilimsel ve Teknik Kurultayı",
        "location": "Ankara, Turkey",
        "date": "4-06 October 2023",
        "pages": "1-2"
      },
      {
        "title": "3D Modelling of Historical Buildings via Social Media Data",
        "authors": ["Arıcan D.", "Tunalıoğlu N.", "Doğan A. H.", "Altuntaş C.", "Erdoğan B."],
        "conference": "Türkiye Ulusal Fotogrametri ve Uzaktan Algılama Birliği (TUFUAB) XII. Teknik Sempozyumu",
        "location": "Sivas, Turkey",
        "date": "24-26 May 2023",
        "pages": "1"
      },
      {
        "title": "A Research on 3D Modeling Facilities based on Instant-NeRF",
        "authors": ["Polat A.", "Tunalıoğlu N.", "Altuntaş C.", "Doğan A. H.", "Öcalan T."],
        "conference": "Türkiye Ulusal Fotogrametri ve Uzaktan Algılama Birliği (TUFUAB) XII. Teknik Sempozyumu",
        "location": "Sivas, Turkey",
        "date": "24-26 May 2023",
        "pages": "1"
      },
      {
        "title": "An investigation on the analysis of multi-frequency multi-GNSS data with GNSS-IR method",
        "authors": ["Altuntaş C.", "Tunalıoğlu N."],
        "conference": "Türkiye Ulusal Jeodezi Komisyonu (TUJK) 2022 Yılı Bilimsel Toplantısı",
        "location": "Kocaeli, Turkey",
        "date": "2-04 November 2022",
        "pages": "1-2"
      },
      {
        "title": "Investigation of Long-term Snow Depth Retrieval Performance of GNSS-IR Method",
        "authors": ["Altuntaş C.", "Tunalıoğlu N.", "Erdoğan B."],
        "conference": "Türkiye Ulusal Jeodezi Komisyonu (TUJK) 2021 Yılı Bilimsel Toplantısı",
        "location": "Ankara, Turkey",
        "date": "25-27 November 2021",
        "pages": "1"
      },
      {
        "title": "Türkiye Kıyılarında Deniz Seviyesi Değişimlerinin GNSS-IR Yöntemi ile Belirlenebilirliğinin Araştırılması: Tekirdağ (TEKR) Sabit GNSS İstasyonu Örneği",
        "authors": ["Altuntaş C.", "Tunalıoğlu N."],
        "conference": "18. Türkiye Harita Bilimsel ve Teknik Kurultayı",
        "location": "Ankara, Turkey",
        "date": "26-29 May 2021",
        "pages": "1"
      },
      {
        "title": "An experimental study on the effect of antenna orientation on GNSS-IR",
        "authors": ["Altuntaş C.", "Tunalıoğlu N."],
        "conference": "Intercontinental Geoinformation Days",
        "date": "25-26 November 2020",
        "pages": "244-247"
      },
      {
        "title": "IVS-CONT17 Süresince VLBI ve GNSS (PPP) Tekniklerinden Elde Edilen Günlük Koordinat ve Baz Uzunluğu Tekrarlanabilirlikleri",
        "authors": ["Altuntaş C.", "Öcal M. F.", "Teke K."],
        "conference": "17. Türkiye Harita Bilimsel ve Teknik Kurultayı",
        "location": "Ankara, Turkey",
        "date": "25 April 2019",
        "pages": "1"
      },
      {
        "title": "GPS Sinyal Gürültü Oranı (SNR) Kullanılarak Genlik Değişimlerinin İncelenmesi",
        "authors": ["Doğan A. H.", "Tunalıoğlu N.", "Durdağ U. M.", "Erdoğan B.", "Öcalan T.", "Altuntaş C."],
        "conference": "17. Türkiye Harita Bilimsel ve Teknik Kurultayı",
        "location": "Ankara, Turkey",
        "date": "25 April 2019",
        "pages": "1"
      }
    ]
  };

// Modified loadPublications function
async function loadPublications() {
    try {
        // Clear existing content first
        const containers = ['sci-publications', 'other-publications', 'conference-publications'];
        containers.forEach(id => {
            const container = document.getElementById(id);
            if (container) {
                container.innerHTML = '<p class="loading">Loading publications...</p>';
            }
        });

        // Use the embedded data directly
        const data = publicationsData;
        console.log('Publications data loaded:', data);
        
        // Load SCI/SSCI/AHCI Publications
        const sciPublicationsContainer = document.getElementById('sci-publications');
        if (sciPublicationsContainer) {
            sciPublicationsContainer.innerHTML = '';
            data.sci_ssci_ahci_publications.forEach(pub => {
                const pubElement = createPublicationElement(pub, 'sci');
                sciPublicationsContainer.appendChild(pubElement);
            });
        }

        // Load Other Publications
        const otherPublicationsContainer = document.getElementById('other-publications');
        if (otherPublicationsContainer) {
            otherPublicationsContainer.innerHTML = ''; // Clear loading message
            data.other_journal_publications.forEach(pub => {
                const pubElement = createPublicationElement(pub, 'other');
                otherPublicationsContainer.appendChild(pubElement);
            });
        }

        // Load Conference Publications
        const conferencePublicationsContainer = document.getElementById('conference-publications');
        if (conferencePublicationsContainer) {
            conferencePublicationsContainer.innerHTML = ''; // Clear loading message
            data.conference_publications.forEach(pub => {
                const pubElement = createPublicationElement(pub, 'conference');
                conferencePublicationsContainer.appendChild(pubElement);
            });
        }
    } catch (error) {
        console.error('Error loading publications:', error);
        // Display error message on the page
        const containers = ['sci-publications', 'other-publications', 'conference-publications'];
        containers.forEach(id => {
            const container = document.getElementById(id);
            if (container) {
                container.innerHTML = `<p class="error">Error loading publications. Please try again later. (${error.message})</p>`;
            }
        });
    }
}

function createPublicationElement(pub, type) {
    const div = document.createElement('div');
    div.className = 'publication-item';

    const title = document.createElement('h4');
    if (pub.url) {
        const titleLink = document.createElement('a');
        titleLink.href = pub.url;
        titleLink.target = "_blank";
        titleLink.textContent = pub.title;
        titleLink.className = 'publication-link';
        title.appendChild(titleLink);
    } else {
        title.textContent = pub.title;
    }

    const authors = document.createElement('p');
    authors.className = 'authors';
    authors.textContent = pub.authors.join(', ');

    const details = document.createElement('p');
    details.className = type === 'conference' ? 'conference' : 'journal';
    
    if (type === 'conference') {
        details.textContent = `${pub.conference}, ${pub.location || ''}, ${pub.date}`;
        if (pub.pages) {
            details.textContent += `, pp.${pub.pages}`;
        }
    } else {
        let journalInfo = `${pub.journal}`;
        if (pub.volume) journalInfo += `, vol.${pub.volume}`;
        if (pub.issue) journalInfo += `, no.${pub.issue}`;
        if (pub.pages) journalInfo += `, pp.${pub.pages}`;
        journalInfo += `, ${pub.year}`;
        if (type === 'sci' && pub.index) {
            journalInfo += ` (${pub.index})`;
        } else if (type === 'other' && pub.index_type) {
            journalInfo += ` (${pub.index_type})`;
        }
        details.textContent = journalInfo;
    }

    div.appendChild(title);
    div.appendChild(authors);
    div.appendChild(details);

    return div;
} 