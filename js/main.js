// EnergiaVital - JavaScript Otimizado
// Todas as funcionalidades interativas

(function() {
    'use strict';

    // ============================================
    // 1. MOBILE NAVIGATION
    // ============================================
    const initMobileNav = () => {
        const toggle = document.querySelector('.nav-toggle');
        const links = document.querySelector('.nav-links');
        
        if (toggle && links) {
            toggle.addEventListener('click', () => {
                links.classList.toggle('open');
            });
        }
    };

    // ============================================
    // 2. BACK TO TOP BUTTON
    // ============================================
    const initBackToTop = () => {
        const btn = document.querySelector('.back-top');
        
        if (btn) {
            window.addEventListener('scroll', () => {
                btn.classList.toggle('show', window.scrollY > 400);
            });
            
            btn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    };

    // ============================================
    // 3. EXIT-INTENT POPUP
    // ============================================
    const initExitPopup = () => {
        const popup = document.getElementById('exitPopup');
        const closeBtn = document.querySelector('.popup-close');
        const form = document.querySelector('.popup-form');
        
        if (!popup) return;

        let hasShown = localStorage.getItem('exitPopupShown');
        
        document.addEventListener('mouseleave', (e) => {
            if (e.clientY < 50 && !hasShown) {
                popup.classList.add('show');
                localStorage.setItem('exitPopupShown', 'true');
            }
        });

        // Close popup
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                popup.classList.remove('show');
            });
        }

        // Close on overlay click
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.classList.remove('show');
            }
        });

        // Handle form submission
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = form.querySelector('input[type="email"]').value;
                
                // Aqui você integraria com seu serviço de email (Mailchimp, ConvertKit, etc)
                console.log('Email capturado:', email);
                
                // Show success message
                alert('✅ Obrigado! Enviamos o guia para seu e-mail.');
                popup.classList.remove('show');
            });
        }
    };

    // ============================================
    // 4. QUIZ INTERATIVO
    // ============================================
    const initQuiz = () => {
        const quizContainer = document.getElementById('quiz-container');
        if (!quizContainer) return;

        const questions = [
            {
                question: "Como você descreveria seus níveis de energia?",
                options: [
                    "Sempre cansado, mesmo após dormir",
                    "Energia baixa durante o dia",
                    "Energia normal, mas poderia ser melhor",
                    "Energia boa na maioria dos dias"
                ]
            },
            {
                question: "Você tem dificuldade para dormir?",
                options: [
                    "Sim, toda noite",
                    "Algumas vezes por semana",
                    "Raramente",
                    "Não tenho problemas"
                ]
            },
            {
                question: "Como está sua concentração?",
                options: [
                    "Muito difícil focar",
                    "Névoa mental frequente",
                    "Às vezes me distraio",
                    "Boa concentração"
                ]
            },
            {
                question: "Você tem cãibras musculares?",
                options: [
                    "Sim, frequentemente",
                    "Às vezes",
                    "Raramente",
                    "Nunca"
                ]
            },
            {
                question: "Como estão seus níveis de estresse?",
                options: [
                    "Muito altos",
                    "Moderados",
                    "Baixos",
                    "Muito relaxado"
                ]
            }
        ];

        let currentQuestion = 0;
        let answers = [];

        const renderQuestion = () => {
            const q = questions[currentQuestion];
            const progress = ((currentQuestion + 1) / questions.length) * 100;

            quizContainer.innerHTML = `
                <div class="quiz-progress">
                    <div class="quiz-progress-bar" style="width: ${progress}%"></div>
                </div>
                <div class="quiz-question">
                    <h3 style="margin-bottom: 1.5rem;">Pergunta ${currentQuestion + 1} de ${questions.length}</h3>
                    <h4 style="margin-bottom: 1.5rem; font-size: 1.2rem;">${q.question}</h4>
                    <div class="quiz-options">
                        ${q.options.map((opt, idx) => `
                            <div class="quiz-option" data-index="${idx}">${opt}</div>
                        `).join('')}
                    </div>
                </div>
            `;

            // Add click handlers
            document.querySelectorAll('.quiz-option').forEach(opt => {
                opt.addEventListener('click', () => {
                    document.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
                    opt.classList.add('selected');
                    
                    setTimeout(() => {
                        answers.push(parseInt(opt.dataset.index));
                        currentQuestion++;
                        
                        if (currentQuestion < questions.length) {
                            renderQuestion();
                        } else {
                            showResults();
                        }
                    }, 300);
                });
            });
        };

        const showResults = () => {
            const avg = answers.reduce((a, b) => a + b, 0) / answers.length;
            
            let recommendation = '';
            let productLink = '';
            
            if (avg <= 1) {
                recommendation = `
                    <h3 style="color: var(--primary); margin-bottom: 1rem;">Magnésio Glicinato é ideal para você!</h3>
                    <p>Seus sintomas indicam forte necessidade de suporte para energia celular e qualidade do sono. O Magnésio Glicinato é altamente absorvível e perfeito para fadiga crônica.</p>
                `;
                productLink = 'suplementos.html#magnesio';
            } else if (avg <= 2) {
                recommendation = `
                    <h3 style="color: var(--primary); margin-bottom: 1rem;">Complexo B Ativado é sua melhor escolha!</h3>
                    <p>Você precisa de suporte para energia mental e foco. As vitaminas B ativadas ajudam diretamente na produção de energia cerebral.</p>
                `;
                productLink = 'suplementos.html#complexob';
            } else {
                recommendation = `
                    <h3 style="color: var(--primary); margin-bottom: 1rem;">Ashwagandha pode ser o ideal!</h3>
                    <p>Seus sintomas sugerem necessidade de suporte ao estresse. Ashwagandha é um adaptógeno poderoso que ajuda o corpo a lidar com o estresse diário.</p>
                `;
                productLink = 'suplementos.html#ashwagandha';
            }

            quizContainer.innerHTML = `
                <div style="text-align: center;">
                    <div style="font-size: 4rem; margin-bottom: 1rem;">✨</div>
                    ${recommendation}
                    <a href="${productLink}" class="btn btn-primary" style="margin-top: 1.5rem;">Ver Produto Recomendado →</a>
                    <button onclick="location.reload()" class="btn btn-outline" style="margin-top: 1rem;">Refazer Quiz</button>
                </div>
            `;
        };

        renderQuestion();
    };

    // ============================================
    // 5. CALCULADORA DE DOSAGEM
    // ============================================
    const initCalculator = () => {
        const calcForm = document.getElementById('calculator-form');
        const resultDiv = document.getElementById('calculator-result');
        
        if (!calcForm) return;

        calcForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const weight = parseFloat(document.getElementById('weight').value);
            const activity = document.getElementById('activity').value;
            const symptoms = document.querySelectorAll('input[name="symptoms"]:checked').length;
            
            // Cálculo simples baseado em peso e fatores
            let baseDosage = weight * 4; // 4mg por kg como base
            
            // Ajustes por nível de atividade
            const activityMultiplier = {
                'low': 0.9,
                'medium': 1.0,
                'high': 1.15,
                'vhigh': 1.3
            };
            
            baseDosage *= activityMultiplier[activity];
            
            // Ajuste por sintomas (mais sintomas = mais magnésio)
            baseDosage += symptoms * 30;
            
            // Limitar entre 200-500mg (faixa segura)
            const finalDosage = Math.min(500, Math.max(200, Math.round(baseDosage / 50) * 50));
            
            resultDiv.innerHTML = `
                <h4>Dosagem Recomendada:</h4>
                <div class="dosage">${finalDosage}mg/dia</div>
                <p style="color: var(--gray); margin-bottom: 1rem;">
                    Divida em 2 doses: ${finalDosage/2}mg pela manhã e ${finalDosage/2}mg à noite
                </p>
                <a href="suplementos.html" class="btn btn-primary">Ver Produtos com ${finalDosage}mg →</a>
                <p style="font-size: 0.8rem; color: var(--gray); margin-top: 1rem;">
                    ⚠️ Sempre consulte seu médico antes de iniciar suplementação
                </p>
            `;
            
            resultDiv.style.display = 'block';
        });
    };

    // ============================================
    // 6. TRACKING DE CLIQUES EM AFILIADOS
    // ============================================
    const trackAffiliateClick = (productName) => {
        // Aqui você integraria com Google Analytics ou seu sistema de tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'affiliate_click', {
                'product_name': productName,
                'event_category': 'engagement',
                'event_label': productName
            });
        }
        
        console.log('Clique rastreado:', productName);
    };

    // Adicionar tracking a todos os links de afiliados
    const initAffiliateTracking = () => {
        document.querySelectorAll('a[data-product]').forEach(link => {
            link.addEventListener('click', (e) => {
                trackAffiliateClick(link.dataset.product);
            });
        });
    };

    // ============================================
    // 7. ARTICLE SEARCH/FILTER
    // ============================================
    const initArticleSearch = () => {
        const searchInput = document.getElementById('searchInput');
        
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                const val = this.value.toLowerCase();
                
                document.querySelectorAll('.article-card').forEach(card => {
                    const text = card.textContent.toLowerCase();
                    card.style.display = text.includes(val) ? '' : 'none';
                });
            });
        }
    };

    // ============================================
    // 8. CATEGORY FILTERS
    // ============================================
    const initCategoryFilters = () => {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const cat = this.dataset.cat;
                
                document.querySelectorAll('.article-card').forEach(card => {
                    if (cat === 'all' || card.dataset.cat === cat) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    };

    // ============================================
    // 9. FAQ ACCORDION
    // ============================================
    const initFAQ = () => {
        document.querySelectorAll('.faq-q').forEach(q => {
            q.addEventListener('click', () => {
                const a = q.nextElementSibling;
                a.classList.toggle('open');
                
                const icon = q.querySelector('.faq-icon');
                if (icon) {
                    icon.textContent = a.classList.contains('open') ? '−' : '+';
                }
            });
        });
    };

    // ============================================
    // 10. LAZY LOADING DE IMAGENS
    // ============================================
    const initLazyLoading = () => {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img.lazy').forEach(img => {
                imageObserver.observe(img);
            });
        }
    };

    // ============================================
    // INICIALIZAR TUDO
    // ============================================
    document.addEventListener('DOMContentLoaded', () => {
        initMobileNav();
        initBackToTop();
        initExitPopup();
        initQuiz();
        initCalculator();
        initAffiliateTracking();
        initArticleSearch();
        initCategoryFilters();
        initFAQ();
        initLazyLoading();
    });

})();
