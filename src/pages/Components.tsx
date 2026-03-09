import React, { useState } from 'react';
import {
  FuiInput,
  FuiButton,
  FuiCard,
  FuiBadge,
  FuiChip,
  FuiStatusIndicator,
  FuiToggle,
  FuiSlider,
  FuiProgressBar,
  FuiSelect,
  FuiCheckbox,
  FuiRadioGroup,
  FuiFileUpload,
  FuiTable,
  FuiInfoRow,
  FuiHeaderBar,
  FuiTooltip,
  FuiCornerBrackets,
  FuiBackgrounds,
  FuiDecoratedCard,
  FuiPulsingDots,
  FuiNetworkTraffic,
  FuiCryptoTicker,
  FuiInitiateButton,
} from '@/components';
import styles from './Components.module.css';

const tableData = [
  { name: 'Alpha Unit', status: 'ACTIVE', value: '12,450' },
  { name: 'Beta Unit', status: 'ONLINE', value: '8,320' },
  { name: 'Gamma Unit', status: 'PENDING', value: '3,100' },
  { name: 'Delta Unit', status: 'ERROR', value: '0' },
];

const tableColumns = [
  { key: 'name', header: 'NAME' },
  { key: 'status', header: 'STATUS', render: (val: string) => <FuiBadge variant={val === 'ERROR' ? 'danger' : val === 'ONLINE' ? 'success' : val === 'PENDING' ? 'warning' : 'info'}>{val}</FuiBadge> },
  { key: 'value', header: 'VALUE' },
];

export const ComponentsPage: React.FC = () => {
  const [toggleState, setToggleState] = useState(false);
  const [sliderValue, setSliderValue] = useState(75);
  const [checkboxState, setCheckboxState] = useState({ a: true, b: false });
  const [radioState, setRadioState] = useState('1');

  return (
    <div className={styles.catalog}>
      <h1 className={styles.title}>FUI HUD COMPONENTS</h1>
      <p className={styles.subtitle}>{'::'} REUSABLE COMPONENTS CATALOG {'::'}</p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{'::'} INPUTS</h2>
        <div className={styles.componentsGrid}>
          <div className={styles.componentItem}>
            <div className={styles.componentName}>FuiInput</div>
            <div className={styles.componentDemo}>
              <FuiInput label="Username" placeholder="Enter username..." />
              <FuiInput label="Email" type="email" placeholder="user@domain.com" />
              <FuiInput label="Password" type="password" placeholder="••••••" />
              <FuiInput label="Disabled" disabled value="System disabled" />
            </div>
            <div className={styles.codeBlock}>
{`import { FuiInput } from './components';

<FuiInput label="Username" placeholder="Enter..." />
<FuiInput type="email" placeholder="user@domain.com" />
<FuiInput disabled value="Disabled" />`}
            </div>
          </div>

          <div className={styles.componentItem}>
            <div className={styles.componentName}>FuiSelect</div>
            <div className={styles.componentDemo}>
              <FuiSelect
                label="Select Option"
                options={[
                  { value: '', label: 'Select...' },
                  { value: '1', label: 'Option Alpha' },
                  { value: '2', label: 'Option Beta' },
                  { value: '3', label: 'Option Gamma' },
                ]}
              />
            </div>
            <div className={styles.codeBlock}>
{`import { FuiSelect } from './components';

<FuiSelect
  label="Select Option"
  options={[
    { value: '1', label: 'Alpha' },
    { value: '2', label: 'Beta' },
  ]}
/>`}
            </div>
          </div>

          <div className={styles.componentItem}>
            <div className={styles.componentName}>FuiFileUpload</div>
            <div className={styles.fileSection}>
              <FuiFileUpload label="Upload File" />
            </div>
            <div className={styles.codeBlock}>
{`import { FuiFileUpload } from './components';

<FuiFileUpload 
  label="Upload File"
  onChange={(file) => console.log(file)}
/>`}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{'::'} BUTTONS</h2>
        <div className={styles.componentsGrid}>
          <div className={styles.componentItem}>
            <div className={styles.componentName}>FuiButton Variants</div>
            <div className={styles.componentDemo}>
              <FuiButton>Primary</FuiButton>
              <FuiButton variant="secondary">Secondary</FuiButton>
              <FuiButton variant="success">Success</FuiButton>
              <FuiButton variant="danger">Danger</FuiButton>
              <FuiButton disabled>Disabled</FuiButton>
            </div>
            <div className={styles.codeBlock}>
{`<FuiButton>Primary</FuiButton>
<FuiButton variant="secondary">Secondary</FuiButton>
<FuiButton variant="success">Success</FuiButton>
<FuiButton variant="danger">Danger</FuiButton>
<FuiButton disabled>Disabled</FuiButton>`}
            </div>
          </div>

          <div className={styles.componentItem}>
            <div className={styles.componentName}>FuiButton Initiate</div>
            <div className={styles.componentDemo}>
              <FuiButton initiate>INITIATE</FuiButton>
            </div>
            <div className={styles.codeBlock}>
{`<FuiButton initiate>INITIATE</FuiButton>`}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{'::'} FORMS</h2>
        <div className={styles.componentsGrid}>
          <div className={styles.componentItem}>
            <div className={styles.componentName}>FuiCheckbox</div>
            <div className={styles.checkboxGroup}>
              <FuiCheckbox
                label="Option A"
                checked={checkboxState.a}
                onChange={(c) => setCheckboxState({ ...checkboxState, a: c })}
              />
              <FuiCheckbox
                label="Option B"
                checked={checkboxState.b}
                onChange={(c) => setCheckboxState({ ...checkboxState, b: c })}
              />
            </div>
            <div className={styles.codeBlock}>
{`import { FuiCheckbox } from './components';

<FuiCheckbox 
  label="Option A" 
  checked={checked}
  onChange={(c) => setChecked(c)}
/>`}
            </div>
          </div>

          <div className={styles.componentItem}>
            <div className={styles.componentName}>FuiRadioGroup</div>
            <div className={styles.radioGroup}>
              <FuiRadioGroup
                name="demo"
                options={[
                  { value: '1', label: 'Choice 1' },
                  { value: '2', label: 'Choice 2' },
                  { value: '3', label: 'Choice 3' },
                ]}
                selected={radioState}
                onChange={(v) => setRadioState(v)}
              />
            </div>
            <div className={styles.codeBlock}>
{`import { FuiRadioGroup } from './components';

<FuiRadioGroup
  name="demo"
  options={[
    { value: '1', label: 'Choice 1' },
    { value: '2', label: 'Choice 2' },
  ]}
  selected={selected}
  onChange={(v) => setValue(v)}
/>`}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{'::'} CONTROLS</h2>
        <div className={styles.componentsGrid}>
          <div className={styles.componentItem}>
            <div className={styles.componentName}>FuiToggle</div>
            <div className={styles.toggleGroup}>
              <FuiToggle
                label="Enable Feature"
                defaultActive={toggleState}
                onChange={(active) => setToggleState(active)}
              />
            </div>
            <div className={styles.codeBlock}>
{`import { FuiToggle } from './components';

<FuiToggle 
  label="Enable Feature"
  defaultActive={false}
  onChange={(active) => console.log(active)}
/>`}
            </div>
          </div>

          <div className={styles.componentItem}>
            <div className={styles.componentName}>FuiSlider</div>
            <div className={styles.sliderSection}>
              <FuiSlider
                label="Volume"
                value={sliderValue}
                onChange={(v) => setSliderValue(v)}
              />
            </div>
            <div className={styles.codeBlock}>
{`import { FuiSlider } from './components';

<FuiSlider
  label="Volume"
  value={75}
  onChange={(v) => setValue(v)}
/>`}
            </div>
          </div>

          <div className={styles.componentItem}>
            <div className={styles.componentName}>FuiProgressBar</div>
            <div>
              <div className={styles.progressSection}>
                <FuiProgressBar value={45} label="System Load" />
              </div>
              <div className={styles.progressSection}>
                <FuiProgressBar value={78} variant="warning" label="Memory" />
              </div>
              <div className={styles.progressSection}>
                <FuiProgressBar value={92} variant="danger" label="Critical" />
              </div>
            </div>
            <div className={styles.codeBlock}>
{`import { FuiProgressBar } from './components';

<FuiProgressBar value={45} label="System" />
<FuiProgressBar value={78} variant="warning" />
<FuiProgressBar value={92} variant="danger" />`}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{'::'} BADGES & INDICATORS</h2>
        <div className={styles.componentsGrid}>
          <div className={styles.componentItem}>
            <div className={styles.componentName}>FuiBadge</div>
            <div className={styles.badgesGroup}>
              <FuiBadge variant="info">INFO</FuiBadge>
              <FuiBadge variant="success">SUCCESS</FuiBadge>
              <FuiBadge variant="warning">WARNING</FuiBadge>
              <FuiBadge variant="danger">DANGER</FuiBadge>
            </div>
            <div className={styles.codeBlock}>
{`import { FuiBadge } from './components';

<FuiBadge variant="info">INFO</FuiBadge>
<FuiBadge variant="success">SUCCESS</FuiBadge>
<FuiBadge variant="warning">WARNING</FuiBadge>
<FuiBadge variant="danger">DANGER</FuiBadge>`}
            </div>
          </div>

          <div className={styles.componentItem}>
            <div className={styles.componentName}>FuiStatusIndicator</div>
            <div className={styles.statusGroup}>
              <FuiStatusIndicator status="online">ONLINE</FuiStatusIndicator>
              <FuiStatusIndicator status="warning">WARNING</FuiStatusIndicator>
              <FuiStatusIndicator status="offline">OFFLINE</FuiStatusIndicator>
            </div>
            <div className={styles.codeBlock}>
{`import { FuiStatusIndicator } from './components';

<FuiStatusIndicator status="online">ONLINE</FuiStatusIndicator>
<FuiStatusIndicator status="warning">WARNING</FuiStatusIndicator>
<FuiStatusIndicator status="offline">OFFLINE</FuiStatusIndicator>`}
            </div>
          </div>

          <div className={styles.componentItem}>
            <div className={styles.componentName}>FuiChip</div>
            <div className={styles.chipsGroup}>
              <FuiChip icon="*">ALPHA</FuiChip>
              <FuiChip icon="o">BETA</FuiChip>
              <FuiChip icon="-">GAMMA</FuiChip>
            </div>
            <div className={styles.codeBlock}>
{`import { FuiChip } from './components';

<FuiChip icon="*">ALPHA</FuiChip>
<FuiChip icon="o">BETA</FuiChip>`}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{'::'} CARDS</h2>
        <div className={styles.componentsGrid}>
          <div className={styles.componentItem}>
            <div className={styles.componentName}>FuiCard</div>
            <div className={styles.componentDemo}>
              <FuiCard title="CPU" value="23%" sub="IDLE" />
            </div>
            <div className={styles.codeBlock}>
{`import { FuiCard } from './components';

<FuiCard title="CPU" value="23%" sub="IDLE" />`}
            </div>
          </div>

          <div className={styles.componentItem}>
            <div className={styles.componentName}>FuiCard Decorated</div>
            <div className={styles.componentDemo}>
              <FuiCard decorated title="UNIT STATUS">
                <p style={{ fontSize: 12, color: '#00ffff80' }}>
                  System operational. All sensors active.
                </p>
              </FuiCard>
            </div>
            <div className={styles.codeBlock}>
{`<FuiCard decorated title="UNIT STATUS">
  <p>Content here</p>
</FuiCard>`}
            </div>
          </div>

          <div className={styles.componentItem}>
            <div className={styles.componentName}>FuiHeaderBar</div>
            <div className={styles.componentDemo}>
              <FuiHeaderBar title="SYSTEM MONITOR" dots={['active', 'warning', 'inactive']} />
            </div>
            <div className={styles.codeBlock}>
{`import { FuiHeaderBar } from './components';

<FuiHeaderBar 
  title="SYSTEM MONITOR" 
  dots={['active', 'warning', 'inactive']} 
/>`}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{'::'} TABLE</h2>
        <div className={styles.tableSection}>
          <FuiTable columns={tableColumns} data={tableData} />
        </div>
        <div className={styles.codeBlock}>
{`import { FuiTable, FuiBadge } from './components';

const columns = [
  { key: 'name', header: 'NAME' },
  { 
    key: 'status', 
    header: 'STATUS',
    render: (val) => <FuiBadge variant="...">{val}</FuiBadge>
  },
  { key: 'value', header: 'VALUE' },
];

<FuiTable columns={columns} data={data} />`}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{'::'} INFO ROWS</h2>
        <div className={styles.infoRows}>
          <FuiInfoRow label="PROCESSOR" value="INTEL i7-12700K" />
          <FuiInfoRow label="MEMORY" value="32GB DDR5" />
          <FuiInfoRow label="STORAGE" value="2TB NVMe" />
        </div>
        <div className={styles.codeBlock}>
{`import { FuiInfoRow } from './components';

<FuiInfoRow label="PROCESSOR" value="INTEL i7" />
<FuiInfoRow label="MEMORY" value="32GB DDR5" />
<FuiInfoRow label="STORAGE" value="2TB NVMe" />`}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{'::'} ANIMATIONS</h2>
        
        <div className={styles.componentItem} style={{ marginBottom: 20 }}>
          <div className={styles.componentName}>Pulsing Dots</div>
          <div className={styles.pulsingDots}>
            <span className={`${styles.pulsingDot} ${styles.pulsingDotPrimary}`} />
            <span className={`${styles.pulsingDot} ${styles.pulsingDotSuccess}`} />
            <span className={`${styles.pulsingDot} ${styles.pulsingDotWarning}`} />
            <span className={`${styles.pulsingDot} ${styles.pulsingDotDanger}`} />
          </div>
        </div>

        <div className={styles.componentItem} style={{ marginBottom: 20 }}>
          <div className={styles.componentName}>Spinners</div>
          <div className={styles.spinners}>
            <span className={styles.spinner} />
            <span className={`${styles.spinner} ${styles.spinnerSlow}`} />
            <span className={`${styles.spinner} ${styles.spinnerFast}`} />
          </div>
        </div>

        <div className={styles.componentItem} style={{ marginBottom: 20 }}>
          <div className={styles.componentName}>Loading Bars</div>
          <div className={styles.loadingBars}>
            <div className={styles.loadingBar}>
              <div className={styles.loadingBarInner} />
            </div>
            <div className={styles.loadingBar}>
              <div className={`${styles.loadingBarInner} ${styles.loadingBarSimple}`} />
            </div>
          </div>
        </div>

        <div className={styles.componentItem} style={{ marginBottom: 20 }}>
          <div className={styles.componentName}>Scan Line</div>
          <div className={styles.scanLine}>
            <div className={styles.scanLineInner} />
          </div>
        </div>

        <div className={styles.componentItem} style={{ marginBottom: 20 }}>
          <div className={styles.componentName}>Blink Effects</div>
          <div className={styles.blinkEffects}>
            <span className={styles.blink}>[ BLINK ]</span>
            <span className={styles.blinkFast}>[ FAST ]</span>
            <span className={styles.flicker}>[ FLICKER ]</span>
          </div>
        </div>

        <div className={styles.componentItem} style={{ marginBottom: 20 }}>
          <div className={styles.componentName}>Typewriter</div>
          <div className={styles.typewriter}>SYSTEM_INITIALIZING...</div>
        </div>

        <div className={styles.componentItem} style={{ marginBottom: 20 }}>
          <div className={styles.componentName}>Shimmer</div>
          <div className={styles.shimmer}>
            <div className={styles.shimmerInner} />
          </div>
        </div>

        <div className={styles.componentItem}>
          <div className={styles.componentName}>Breathing Scale</div>
          <div className={styles.breathing}>
            <span className={styles.breathingSolid} />
            <span className={styles.breathingBorder} />
            <span className={styles.breathingTransparent} />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{'::'} TICKERS</h2>
        
        <div className={styles.componentItem} style={{ marginBottom: 20 }}>
          <div className={styles.componentName}>Crypto Ticker</div>
          <div className={styles.ticker}>
            <div className={styles.tickerInner}>
              <span className={styles.tickerLabel}>BTC</span>
              <span className={styles.tickerUp}> 67,234.56 (+2.34%)</span>
              <span style={{ marginLeft: 15 }}>ETH</span>
              <span className={styles.tickerUp}> 3,456.78 (+1.89%)</span>
              <span style={{ marginLeft: 15 }}>SOL</span>
              <span className={styles.tickerDown}> 142.23 (-3.21%)</span>
              <span style={{ marginLeft: 15 }}>AVAX</span>
              <span className={styles.tickerUp}> 45.67 (+0.98%)</span>
              <span style={{ marginLeft: 15 }}>BTC</span>
              <span className={styles.tickerUp}> 67,234.56 (+2.34%)</span>
            </div>
          </div>
        </div>

        <div className={styles.componentItem} style={{ marginBottom: 20 }}>
          <div className={styles.componentName}>Stock Ticker</div>
          <div className={styles.ticker}>
            <div className={`${styles.tickerInner} ${styles.tickerSlow}`}>
              <span style={{ color: '#00ffff' }}>AAPL</span>
              <span className={styles.tickerUp}> 178.45 (+1.2%)</span>
              <span style={{ marginLeft: 15, color: '#00ffff' }}>GOOGL</span>
              <span className={styles.tickerDown}> 142.30 (-0.8%)</span>
              <span style={{ marginLeft: 15, color: '#00ffff' }}>MSFT</span>
              <span className={styles.tickerUp}> 412.67 (+0.5%)</span>
              <span style={{ marginLeft: 15, color: '#00ffff' }}>TSLA</span>
              <span className={styles.tickerDown}> 167.23 (-2.1%)</span>
              <span style={{ marginLeft: 15, color: '#00ffff' }}>NVDA</span>
              <span className={styles.tickerUp}> 892.45 (+3.4%)</span>
            </div>
          </div>
        </div>

        <div className={styles.componentItem}>
          <div className={styles.componentName}>Network Traffic</div>
          <div className={styles.ticker}>
            <div className={`${styles.tickerInner} ${styles.tickerFast}`}>
              <span style={{ color: '#00ffff80' }}>[IN] 192.168.1.105</span>
              <span style={{ color: '#00ff0080', marginLeft: 10 }}>12.4 KB/s</span>
              <span style={{ color: '#00ffff80', marginLeft: 20 }}>[OUT] 192.168.1.105</span>
              <span style={{ color: '#00ff0080', marginLeft: 10 }}>8.2 KB/s</span>
              <span style={{ color: '#00ffff80', marginLeft: 20 }}>[IN] 192.168.1.142</span>
              <span style={{ color: '#00ff0080', marginLeft: 10 }}>45.6 KB/s</span>
            </div>
          </div>
        </div>

        <div className={styles.componentItem} style={{ marginBottom: 20 }}>
          <div className={styles.componentName}>Alert Banners</div>
          <div className={styles.alertBanners}>
            <div className={`${styles.alertBanner} ${styles.alertSuccess}`}>
              <span>+</span>
              <span className={styles.alertText}>SYSTEM STATUS: OPTIMAL</span>
              <span className={styles.alertTime}>2 min ago</span>
            </div>
            <div className={`${styles.alertBanner} ${styles.alertWarning}`}>
              <span>!</span>
              <span className={styles.alertText}>HIGH CPU LOAD: 89%</span>
              <span className={styles.alertTime}>5 min ago</span>
            </div>
            <div className={`${styles.alertBanner} ${styles.alertDanger}`}>
              <span>-</span>
              <span className={styles.alertText}>CONNECTION LOST: NODE-07</span>
              <span className={styles.alertTime}>12 sec ago</span>
            </div>
          </div>
        </div>

        <div className={styles.componentItem}>
          <div className={styles.componentName}>Network Traffic</div>
          <div className={styles.ticker}>
            <div className={`${styles.tickerInner} ${styles.tickerFast}`}>
              <span style={{ color: '#00ffff80' }}>[IN] 192.168.1.105</span>
              <span style={{ color: '#00ff0080', marginLeft: 10 }}>12.4 KB/s</span>
              <span style={{ color: '#00ffff80', marginLeft: 20 }}>[OUT] 192.168.1.105</span>
              <span style={{ color: '#00ff0080', marginLeft: 10 }}>8.2 KB/s</span>
              <span style={{ color: '#00ffff80', marginLeft: 20 }}>[IN] 192.168.1.142</span>
              <span style={{ color: '#00ff0080', marginLeft: 10 }}>45.6 KB/s</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{'::'} TYPOGRAPHY</h2>
        
        <div className={styles.componentItem} style={{ marginBottom: 20 }}>
          <div className={styles.componentName}>Title Styles</div>
          <div className={styles.typographySection}>
            <span className={styles.typographyTitle}>// MAIN TITLE</span>
            <span className={styles.typographySectionLabel}>{'::'} SECTION LABEL ::</span>
            <span className={styles.typographySubsection}>[ SUBSECTION ]</span>
            <span className={styles.typographyComment}>// Comment text</span>
          </div>
        </div>

        <div className={styles.componentItem} style={{ marginBottom: 20 }}>
          <div className={styles.componentName}>Fake Data</div>
          <div className={styles.fakeData}>
            <span>47.3821 N 8.5417 E</span>
            <span>SYS.ID: 8847-AA-F</span>
            <span>00:00:00.000 UTC</span>
            <span>PACKET.LOSS: 0.0%</span>
            <span>MEM: 78.4% | CPU: 23.1%</span>
          </div>
        </div>

        <div className={styles.componentItem} style={{ marginBottom: 20 }}>
          <div className={styles.componentName}>Decorative Symbols</div>
          <div className={styles.symbols}>
            <span>* o -</span>
            <span>{'>'} {'>'} {'>'} {'>'}</span>
            <span>{'[ ]'}</span>
            <span>{'# @ $ %'}</span>
          </div>
        </div>

        <div className={styles.componentItem}>
          <div className={styles.componentName}>Font Weights</div>
          <div className={styles.fontWeights}>
            <span className={`${styles.fontWeight} ${styles.fontWeightLight}`}>Light (300)</span>
            <span className={`${styles.fontWeight} ${styles.fontWeightRegular}`}>Regular (400)</span>
            <span className={`${styles.fontWeight} ${styles.fontWeightMedium}`}>Medium (500)</span>
            <span className={`${styles.fontWeight} ${styles.fontWeightSemiBold}`}>SemiBold (600)</span>
            <span className={`${styles.fontWeight} ${styles.fontWeightBold}`}>Bold (700)</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{'::'} TOOLTIP</h2>
        <div className={styles.componentItem}>
          <div className={styles.componentName}>FuiTooltip</div>
          <div className={styles.tooltipDemo}>
            <FuiTooltip content="System Information">[<span style={{ color: '#00ffff' }}>?</span>]</FuiTooltip>
            <FuiTooltip content="Help Documentation">[<span style={{ color: '#00ffff' }}>?</span>]</FuiTooltip>
            <FuiTooltip content="Contact Support">[<span style={{ color: '#00ffff' }}>?</span>]</FuiTooltip>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{'::'} DECORATIVE</h2>
        <div className={styles.componentItem} style={{ marginBottom: 20 }}>
          <div className={styles.componentName}>Corner Brackets</div>
          <FuiCornerBrackets />
        </div>
        <div className={styles.componentItem} style={{ marginBottom: 20 }}>
          <div className={styles.componentName}>Data Pills</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 10 }}>
            <span className={styles.dataPill}>SYS.READY</span>
            <span className={styles.dataPill}>NET.CONN</span>
            <span className={styles.dataPill}>GPU.ACTIVE</span>
          </div>
        </div>
        <div className={styles.componentItem} style={{ marginBottom: 20 }}>
          <div className={styles.componentName}>Status Indicators</div>
          <FuiPulsingDots />
        </div>
        <div className={styles.componentItem} style={{ marginBottom: 20 }}>
          <div className={styles.componentName}>Info Rows</div>
          <div style={{ border: '1px solid #00ffff15', padding: 15 }}>
            <FuiInfoRow label="PROCESSOR" value="INTEL i7-12700K" />
            <FuiInfoRow label="MEMORY" value="32GB DDR5" />
            <FuiInfoRow label="STORAGE" value="2TB NVMe" />
          </div>
        </div>
        <div className={styles.componentItem}>
          <div className={styles.componentName}>Decorated Card</div>
          <FuiDecoratedCard title="// UNIT STATUS">
            System operational. All sensors active.<br />
            Neural link: <span style={{ color: '#00ffff' }}>STABLE</span>
          </FuiDecoratedCard>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{'::'} TEXTURES</h2>
        <div className={styles.componentItem} style={{ marginBottom: 20 }}>
          <div className={styles.componentName}>Background Textures</div>
          <FuiBackgrounds />
        </div>
        <div className={styles.componentItem}>
          <div className={styles.componentName}>FUI Cards</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 15, marginTop: 10 }}>
            <FuiDecoratedCard title="// CARD A">
              Standard card with border glow effects
            </FuiDecoratedCard>
            <FuiDecoratedCard title="// CARD B" variant="elevated">
              Elevated card with higher opacity
            </FuiDecoratedCard>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{'::'} NETWORK</h2>
        <div className={styles.componentItem}>
          <div className={styles.componentName}>FuiNetworkTraffic</div>
          <FuiNetworkTraffic />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{'::'} TICKERS</h2>
        <div className={styles.componentItem} style={{ marginBottom: 20 }}>
          <div className={styles.componentName}>Crypto Ticker</div>
          <FuiCryptoTicker type="crypto" />
        </div>
        <div className={styles.componentItem}>
          <div className={styles.componentName}>Stock Ticker</div>
          <FuiCryptoTicker type="stock" />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{'::'} INITIATE</h2>
        <div className={styles.componentItem}>
          <div className={styles.componentName}>FuiInitiateButton</div>
          <div style={{ display: 'flex', gap: 20, marginTop: 10 }}>
            <FuiInitiateButton direction="right" label="INITIATE" />
            <FuiInitiateButton direction="left" label="INITIATE" />
          </div>
        </div>
      </section>
    </div>
  );
};
